#!/bin/bash

# update_index.sh - Automatically update the INDEX.md file based on paper metadata
# Usage: ./scripts/update_index.sh

set -e

# Check if we're in the Research directory
if [[ ! -d "Papers" ]]; then
    echo "Error: Please run this script from the Research/ directory"
    exit 1
fi

# Temporary files
TMP_INDEX="$(mktemp)"
TMP_STATS="$(mktemp)"

# Initialize counters
TOTAL_PAPERS=0
YEARS=()
TOPICS=()
STATUS_COUNT=()

# Function to extract value from YAML
get_yaml_value() {
    local file="$1"
    local key="$2"
    grep "^${key}:" "$file" | head -1 | sed "s/^${key}: //" | sed "s/^\s*//" | sed "s/\s*$//"
}

# Function to extract array from YAML
get_yaml_array() {
    local file="$1"
    local key="$2"
    local result=""
    local in_array=false
    
    while IFS= read -r line; do
        if [[ "$line" =~ ^"${key}:" ]]; then
            in_array=true
            continue
        fi
        
        if [[ "$in_array" == true ]]; then
            # Check if line starts with space (array item)
            if [[ "$line" =~ ^\s+-\s ]]; then
                item=$(echo "$line" | sed "s/^\s*-\s*//" | sed "s/^'//" | sed "s/'$//" | sed 's/"//g')
                result+="$item, "
            else
                # End of array
                break
            fi
        fi
    done < "$file"
    
    # Remove trailing comma and space
    result=${result%, }
    echo "$result"
}

# Function to extract status
get_status() {
    local file="$1"
    local status=$(get_yaml_value "$file" "status")
    
    # Remove quotes if present
    status=$(echo "$status" | sed 's/"//g' | sed "s/'//g")
    
    # Map to icon
    case "$status" in
        "to_read") echo "📄 To Read" ;;
        "reading") echo "📖 Reading" ;;
        "read") echo "✅ Read" ;;
        "implementing") echo "🛠️ Implementing" ;;
        "implemented") echo "💻 Implemented" ;;
        "reproduced") echo "🔬 Reproduced" ;;
        *) echo "$status" ;;
    esac
}

# Function to extract implementation status
get_impl_status() {
    local file="$1"
    local status=$(get_yaml_value "$file" "implementation_status")
    
    # Remove quotes if present
    status=$(echo "$status" | sed 's/"//g' | sed "s/'//g")
    
    # Map to icon
    case "$status" in
        "not_started") echo "❌ Not Started" ;;
        "in_progress") echo "🟡 In Progress" ;;
        "completed") echo "✅ Completed" ;;
        *) echo "$status" ;;
    esac
}

# Function to extract reproduction status
get_repro_status() {
    local file="$1"
    local status=$(get_yaml_value "$file" "reproduction_status")
    
    # Remove quotes if present
    status=$(echo "$status" | sed 's/"//g' | sed "s/'//g")
    
    # Map to icon
    case "$status" in
        "not_attempted") echo "❌ Not Attempted" ;;
        "attempted") echo "🟡 Attempted" ;;
        "partial") echo "🟡 Partial" ;;
        "full") echo "✅ Full" ;;
        *) echo "$status" ;;
    esac
}

# Function to extract rating
get_rating() {
    local file="$1"
    local rating=$(get_yaml_value "$file" "rating")
    
    # Convert to stars
    case "$rating" in
        "1") echo "★" ;;
        "2") echo "★★" ;;
        "3") echo "★★★" ;;
        "4") echo "★★★★" ;;
        "5") echo "★★★★★" ;;
        *) echo "$rating" ;;
    esac
}

# Start building the index
echo "# Research Papers Index" > "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "This file serves as a central index for all papers in the repository. Use it to quickly find papers by topic, year, or status." >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "## 📊 Statistics" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"

# First pass: collect statistics
for year_dir in Papers/*/; do
    year=$(basename "$year_dir")
    
    for paper_dir in "$year_dir"*/; do
        if [[ -f "$paper_dir/metadata.yaml" ]]; then
            TOTAL_PAPERS=$((TOTAL_PAPERS + 1))
            
            # Extract metadata
            title=$(get_yaml_value "$paper_dir/metadata.yaml" "title" | sed 's/"//g' | sed "s/'//g")
            authors=$(get_yaml_value "$paper_dir/metadata.yaml" "authors")
            venue=$(get_yaml_value "$paper_dir/metadata.yaml" "venue" | sed 's/"//g' | sed "s/'//g")
            status=$(get_yaml_value "$paper_dir/metadata.yaml" "status" | sed 's/"//g' | sed "s/'//g")
            tags=$(get_yaml_array "$paper_dir/metadata.yaml" "tags")
            
            # Update year count
            if [[ -z "${YEARS[$year]+x}" ]]; then
                YEARS[$year]=0
            fi
            YEARS[$year]=$((YEARS[$year] + 1))
            
            # Update status count
            if [[ -z "${STATUS_COUNT[$status]+x}" ]]; then
                STATUS_COUNT[$status]=0
            fi
            STATUS_COUNT[$status]=$((STATUS_COUNT[$status] + 1))
            
            # Update topic count
            IFS=', ' read -ra tag_array <<< "$tags"
            for tag in "${tag_array[@]}"; do
                tag=$(echo "$tag" | sed 's/^\s*//' | sed 's/\s*$//')
                if [[ -n "$tag" ]]; then
                    if [[ -z "${TOPICS[$tag]+x}" ]]; then
                        TOPICS[$tag]=0
                    fi
                    TOPICS[$tag]=$((TOPICS[$tag] + 1))
                fi
            done
        fi
    done
done

# Write statistics
echo "- **Total Papers**: $TOTAL_PAPERS" >> "$TMP_INDEX"
echo "- **By Year**:" >> "$TMP_INDEX"

# Sort years
for year in $(echo "${!YEARS[@]}" | tr ' ' '\n' | sort -r); do
    echo "  - $year: ${YEARS[$year]} papers" >> "$TMP_INDEX"
done

echo "- **By Status**:" >> "$TMP_INDEX"
for status in $(echo "${!STATUS_COUNT[@]}" | tr ' ' '\n' | sort); do
    echo "  - $status: ${STATUS_COUNT[$status]} papers" >> "$TMP_INDEX"
done

echo "- **By Topic**:" >> "$TMP_INDEX"
for topic in $(echo "${!TOPICS[@]}" | tr ' ' '\n' | sort); do
    echo "  - $topic: ${TOPICS[$topic]} papers" >> "$TMP_INDEX"
done

echo "" >> "$TMP_INDEX"
echo "---" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"

# Second pass: build year sections
echo "## 📅 By Year" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"

for year in $(ls -1 Papers/ | sort -r); do
    if [[ -d "Papers/$year" ]]; then
        echo "### $year" >> "$TMP_INDEX"
        echo "" >> "$TMP_INDEX"
        echo "| Paper | Authors | Venue | Status | Implementation | Reproduction | Tags |" >> "$TMP_INDEX"
        echo "|-------|---------|-------|--------|----------------|--------------|------|" >> "$TMP_INDEX"
        
        for paper_dir in Papers/$year/*/; do
            if [[ -f "$paper_dir/metadata.yaml" ]]; then
                # Extract metadata
                title=$(get_yaml_value "$paper_dir/metadata.yaml" "title" | sed 's/"//g' | sed "s/'//g")
                authors=$(get_yaml_value "$paper_dir/metadata.yaml" "authors" | sed 's/\[//g' | sed 's/\]//g' | sed 's/"//g' | sed "s/'//g" | sed 's/, /,/g')
                venue=$(get_yaml_value "$paper_dir/metadata.yaml" "venue" | sed 's/"//g' | sed "s/'//g")
                paper_status=$(get_status "$paper_dir/metadata.yaml")
                impl_status=$(get_impl_status "$paper_dir/metadata.yaml")
                repro_status=$(get_repro_status "$paper_dir/metadata.yaml")
                tags=$(get_yaml_array "$paper_dir/metadata.yaml" "tags")
                
                # Get relative path for link
                rel_path=$(echo "$paper_dir" | sed "s|Papers/||")
                
                # Escape pipes for markdown
                title=$(echo "$title" | sed 's/|/\\|/g')
                authors=$(echo "$authors" | sed 's/|/\\|/g')
                venue=$(echo "$venue" | sed 's/|/\\|/g')
                
                echo "| [$title]($rel_path/summary.md) | $authors | $venue | $paper_status | $impl_status | $repro_status | $tags |" >> "$TMP_INDEX"
            fi
        done
        
        echo "" >> "$TMP_INDEX"
    fi
done

# Build topic sections
echo "---" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "## 🏷️ By Topic" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"

# Collect all unique topics
ALL_TOPICS=()
for paper_dir in Papers/*/*/; do
    if [[ -f "$paper_dir/metadata.yaml" ]]; then
        tags=$(get_yaml_array "$paper_dir/metadata.yaml" "tags")
        IFS=', ' read -ra tag_array <<< "$tags"
        for tag in "${tag_array[@]}"; do
            tag=$(echo "$tag" | sed 's/^\s*//' | sed 's/\s*$//')
            if [[ -n "$tag" && -z "$(echo ${ALL_TOPICS[@]} | grep -w "$tag")" ]]; then
                ALL_TOPICS+=("$tag")
            fi
        done
    fi
done

# Sort topics
IFS=$'\n' SORTED_TOPICS=($(sort <<< "${ALL_TOPICS[*]}"))
unset IFS

# Create a section for each topic
for topic in "${SORTED_TOPICS[@]}"; do
    # Check if there are papers with this topic
    count=0
    for paper_dir in Papers/*/*/; do
        if [[ -f "$paper_dir/metadata.yaml" ]]; then
            tags=$(get_yaml_array "$paper_dir/metadata.yaml" "tags")
            if [[ "$tags" == *"$topic"* ]]; then
                count=$((count + 1))
            fi
        fi
    done
    
    if [[ $count -gt 0 ]]; then
        echo "### $topic" >> "$TMP_INDEX"
        echo "" >> "$TMP_INDEX"
        echo "| Paper | Year | Status | Implementation | Reproduction |" >> "$TMP_INDEX"
        echo "|-------|------|--------|----------------|--------------|" >> "$TMP_INDEX"
        
        for year in $(ls -1 Papers/ | sort -r); do
            for paper_dir in Papers/$year/*/; do
                if [[ -f "$paper_dir/metadata.yaml" ]]; then
                    tags=$(get_yaml_array "$paper_dir/metadata.yaml" "tags")
                    if [[ "$tags" == *"$topic"* ]]; then
                        title=$(get_yaml_value "$paper_dir/metadata.yaml" "title" | sed 's/"//g' | sed "s/'//g")
                        paper_status=$(get_status "$paper_dir/metadata.yaml")
                        impl_status=$(get_impl_status "$paper_dir/metadata.yaml")
                        repro_status=$(get_repro_status "$paper_dir/metadata.yaml")
                        
                        rel_path=$(echo "$paper_dir" | sed "s|Papers/||")
                        
                        title=$(echo "$title" | sed 's/|/\\|/g')
                        
                        echo "| [$title]($rel_path/summary.md) | $year | $paper_status | $impl_status | $repro_status |" >> "$TMP_INDEX"
                    fi
                fi
            done
        done
        
        echo "" >> "$TMP_INDEX"
    fi
done

# Build status sections
echo "---" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "## 📚 By Status" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"

# Define status order
STATUS_ORDER=("to_read" "reading" "read" "implementing" "implemented" "reproduced")

for status in "${STATUS_ORDER[@]}"; do
    # Check if there are papers with this status
    count=0
    for paper_dir in Papers/*/*/; do
        if [[ -f "$paper_dir/metadata.yaml" ]]; then
            paper_status=$(get_yaml_value "$paper_dir/metadata.yaml" "status" | sed 's/"//g' | sed "s/'//g")
            if [[ "$paper_status" == "$status" ]]; then
                count=$((count + 1))
            fi
        fi
    done
    
    if [[ $count -gt 0 ]]; then
        # Get display name
        case "$status" in
            "to_read") display="To Read" ;;
            "reading") display="Reading" ;;
            "read") display="Read" ;;
            "implementing") display="Implementing" ;;
            "implemented") display="Implemented" ;;
            "reproduced") display="Reproduced" ;;
            *) display="$status" ;;
        esac
        
        echo "### $display" >> "$TMP_INDEX"
        echo "" >> "$TMP_INDEX"
        echo "| Paper | Year | Authors | Venue | Tags |" >> "$TMP_INDEX"
        echo "|-------|------|---------|-------|------|" >> "$TMP_INDEX"
        
        for year in $(ls -1 Papers/ | sort -r); do
            for paper_dir in Papers/$year/*/; do
                if [[ -f "$paper_dir/metadata.yaml" ]]; then
                    paper_status=$(get_yaml_value "$paper_dir/metadata.yaml" "status" | sed 's/"//g' | sed "s/'//g")
                    if [[ "$paper_status" == "$status" ]]; then
                        title=$(get_yaml_value "$paper_dir/metadata.yaml" "title" | sed 's/"//g' | sed "s/'//g")
                        authors=$(get_yaml_value "$paper_dir/metadata.yaml" "authors" | sed 's/\[//g' | sed 's/\]//g' | sed 's/"//g' | sed "s/'//g" | sed 's/, /,/g')
                        venue=$(get_yaml_value "$paper_dir/metadata.yaml" "venue" | sed 's/"//g' | sed "s/'//g")
                        tags=$(get_yaml_array "$paper_dir/metadata.yaml" "tags")
                        
                        rel_path=$(echo "$paper_dir" | sed "s|Papers/||")
                        
                        title=$(echo "$title" | sed 's/|/\\|/g')
                        authors=$(echo "$authors" | sed 's/|/\\|/g')
                        venue=$(echo "$venue" | sed 's/|/\\|/g')
                        
                        echo "| [$title]($rel_path/summary.md) | $year | $authors | $venue | $tags |" >> "$TMP_INDEX"
                    fi
                fi
            done
        done
        
        echo "" >> "$TMP_INDEX"
    fi
done

# Add the rest of the template
echo "---" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "## 🎯 Priority Papers" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### High Priority" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "| Paper | Year | Why | Status |" >> "$TMP_INDEX"
echo "|-------|------|-----|--------|" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### Medium Priority" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "| Paper | Year | Why | Status |" >> "$TMP_INDEX"
echo "|-------|------|-----|--------|" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### Low Priority" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "| Paper | Year | Why | Status |" >> "$TMP_INDEX"
echo "|-------|------|-----|--------|" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"

# Add the footer
echo "---" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "## 🔍 Search Tips" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### By Author" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "\`\`\`bash" >> "$TMP_INDEX"
echo "cd Research/Papers" >> "$TMP_INDEX"
echo "grep -r \"Author Name\" --include=\"*.yaml\" --include=\"*.md\"" >> "$TMP_INDEX"
echo "\`\`\`" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### By Keyword" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "\`\`\`bash" >> "$TMP_INDEX"
echo "cd Research/Papers" >> "$TMP_INDEX"
echo "grep -r \"keyword\" --include=\"*.md\" --include=\"*.yaml\"" >> "$TMP_INDEX"
echo "\`\`\`" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### By Tag" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "\`\`\`bash" >> "$TMP_INDEX"
echo "cd Research/Papers" >> "$TMP_INDEX"
echo "grep -r \"tag_name\" --include=\"metadata.yaml\" -l | xargs dirname | sort -u" >> "$TMP_INDEX"
echo "\`\`\`" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### By Status" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "\`\`\`bash" >> "$TMP_INDEX"
echo "cd Research/Papers" >> "$TMP_INDEX"
echo "grep -r 'status: \"reading\"' --include=\"metadata.yaml\" -l | xargs dirname | sort -u" >> "$TMP_INDEX"
echo "\`\`\`" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "---" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "## 📝 How to Update This Index" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### Manual Update" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "1. Add new papers to the appropriate year section" >> "$TMP_INDEX"
echo "2. Update the statistics at the top" >> "$TMP_INDEX"
echo "3. Add to relevant topic sections" >> "$TMP_INDEX"
echo "4. Update status sections" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### Automated Update" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "Run the update script:" >> "$TMP_INDEX"
echo "\`\`\`bash" >> "$TMP_INDEX"
echo "./scripts/update_index.sh" >> "$TMP_INDEX"
echo "\`\`\`" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "This will automatically:" >> "$TMP_INDEX"
echo "- Scan all paper directories" >> "$TMP_INDEX"
echo "- Extract metadata from \`metadata.yaml\` files" >> "$TMP_INDEX"
echo "- Update the index with current information" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "---" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "## 🎨 Legend" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### Status Icons" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "- 📄 - To Read" >> "$TMP_INDEX"
echo "- 📖 - Reading" >> "$TMP_INDEX"
echo "- ✅ - Read" >> "$TMP_INDEX"
echo "- 🛠️ - Implementing" >> "$TMP_INDEX"
echo "- 💻 - Implemented" >> "$TMP_INDEX"
echo "- 🔬 - Reproduced" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### Implementation Status" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "- ❌ - Not Started" >> "$TMP_INDEX"
echo "- 🟡 - In Progress" >> "$TMP_INDEX"
echo "- ✅ - Completed" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "### Reproduction Status" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "- ❌ - Not Attempted" >> "$TMP_INDEX"
echo "- 🟡 - Partial" >> "$TMP_INDEX"
echo "- ✅ - Full" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "---" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "## 📌 Notes" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "- This index is meant to be a living document" >> "$TMP_INDEX"
echo "- Update it regularly as you add new papers" >> "$TMP_INDEX"
echo "- Use the automated script when possible" >> "$TMP_INDEX"
echo "- Keep the format consistent for easy reading" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "---" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"
echo "*Last updated: $(date +%Y-%m-%d)*" >> "$TMP_INDEX"

# Replace the old index
mv "$TMP_INDEX" INDEX.md

# Clean up
rm -f "$TMP_STATS"

echo "✅ INDEX.md has been updated successfully!"
echo ""
echo "Statistics:"
echo "  - Total papers: $TOTAL_PAPERS"
echo "  - Years: ${#YEARS[@]}"
echo "  - Topics: ${#TOPICS[@]}"
echo "  - Statuses: ${#STATUS_COUNT[@]}"
