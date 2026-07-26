#!/bin/bash

# setup_paper.sh - Automatically set up directories and templates for a new paper
# Usage: ./setup_paper.sh "Paper Title" YEAR [--with-implementation] [--with-experiment]

set -e

# Check if we're in the Research directory
if [[ ! -d "Templates" ]]; then
    echo "Error: Please run this script from the Research/ directory"
    echo "Usage: cd Research && ./scripts/setup_paper.sh \"Paper Title\" YEAR"
    exit 1
fi

# Parse arguments
TITLE="$1"
YEAR="$2"
WITH_IMPLEMENTATION=false
WITH_EXPERIMENT=false

# Parse optional flags
shift 2
while [[ $# -gt 0 ]]; do
    case "$1" in
        --with-implementation|-i)
            WITH_IMPLEMENTATION=true
            shift
            ;;
        --with-experiment|-e)
            WITH_EXPERIMENT=true
            shift
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

# Validate inputs
if [[ -z "$TITLE" || -z "$YEAR" ]]; then
    echo "Usage: ./scripts/setup_paper.sh \"Paper Title\" YEAR [--with-implementation] [--with-experiment]"
    echo ""
    echo "Examples:"
    echo "  ./scripts/setup_paper.sh \"Attention Is All You Need\" 2017"
    echo "  ./scripts/setup_paper.sh \"BERT Pre-training\" 2018 --with-implementation"
    echo "  ./scripts/setup_paper.sh \"Diffusion Models\" 2020 --with-implementation --with-experiment"
    exit 1
fi

# Convert title to directory name
DIR_NAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '_' | tr -d ':' | tr -d ',')

# Validate year
if ! [[ "$YEAR" =~ ^[0-9]{4}$ ]]; then
    echo "Error: Year must be a 4-digit number (e.g., 2024)"
    exit 1
fi

echo "Setting up paper: \"$TITLE\" ($YEAR)"
echo "Directory name: $DIR_NAME"
echo ""

# Create Papers directory
PAPER_DIR="Papers/${YEAR}/${DIR_NAME}"
echo "Creating: $PAPER_DIR"
mkdir -p "$PAPER_DIR"

# Copy paper templates
cp Templates/paper_summary.md "$PAPER_DIR/summary.md"
cp Templates/metadata.yaml "$PAPER_DIR/metadata.yaml"

# Fill in basic metadata
sed -i "s/{{Paper Title}}/$TITLE/g" "$PAPER_DIR/metadata.yaml"
sed -i "s/{{YYYY}}/$YEAR/g" "$PAPER_DIR/metadata.yaml"
sed -i "s/{{paper_title}}/$DIR_NAME/g" "$PAPER_DIR/metadata.yaml"

# Fill in summary template
sed -i "s/{{Paper Title}}/$TITLE/g" "$PAPER_DIR/summary.md"
sed -i "s/{{Year}}/$YEAR/g" "$PAPER_DIR/summary.md"

echo "✓ Created Papers directory with templates"

# Create Implementation directory if requested
if [[ "$WITH_IMPLEMENTATION" == true ]]; then
    IMP_DIR="Implementations/${YEAR}/${DIR_NAME}"
    echo "Creating: $IMP_DIR"
    mkdir -p "$IMP_DIR/src"
    mkdir -p "$IMP_DIR/config"
    mkdir -p "$IMP_DIR/scripts"
    
    # Copy implementation templates
    cp Templates/implementation.py "$IMP_DIR/src/model.py"
    
    # Create requirements.txt
    cat > "$IMP_DIR/requirements.txt" << EOF
# Dependencies for $TITLE implementation
torch>=2.0.0
numpy>=1.24.0
EOF
    
    # Create README
    cat > "$IMP_DIR/README.md" << EOF
# $TITLE Implementation

## Overview
Implementation of "$TITLE" ($YEAR)

## Usage

### Install dependencies
\`\`\`bash
pip install -r requirements.txt
\`\`\`

### Train
\`\`\`bash
python src/train.py --config config/default.yaml
\`\`\`

## Status
- [ ] Model implementation
- [ ] Training script
- [ ] Evaluation script
- [ ] Results match paper

## Notes
Add your implementation notes here.
EOF
    
    echo "✓ Created Implementations directory with templates"
fi

# Create Experiment directory if requested
if [[ "$WITH_EXPERIMENT" == true ]]; then
    EXP_DIR="Experiments/${YEAR}/${DIR_NAME}"
    echo "Creating: $EXP_DIR"
    mkdir -p "$EXP_DIR/configs"
    mkdir -p "$EXP_DIR/scripts"
    mkdir -p "$EXP_DIR/logs"
    mkdir -p "$EXP_DIR/runs"
    
    # Copy experiment templates
    cp Templates/experiment_config.yaml "$EXP_DIR/configs/baseline.yaml"
    
    # Create run script
    cat > "$EXP_DIR/scripts/run.sh" << EOF
#!/bin/bash
# Run experiment for $TITLE

CONFIG="\$1"
EXP_NAME="${DIR_NAME}_\$(basename \$CONFIG .yaml)"
OUTPUT_DIR="../runs/\${EXP_NAME}_\$(date +%Y%m%d_%H%M%S)"

mkdir -p "\$OUTPUT_DIR"

python -c "
import sys
import yaml
print('Running experiment with config:', sys.argv[1])
with open(sys.argv[1]) as f:
    config = yaml.safe_load(f)
    print('Config:', config)
" "\$CONFIG"

echo "Experiment output saved to: \$OUTPUT_DIR"
EOF
    chmod +x "$EXP_DIR/scripts/run.sh"
    
    # Create README
    cat > "$EXP_DIR/README.md" << EOF
# $TITLE Experiments

## Overview
Experiments for reproducing "$TITLE" ($YEAR)

## Configurations
- `configs/baseline.yaml` - Baseline configuration

## Running Experiments

### Single run
\`\`\`bash
./scripts/run.sh configs/baseline.yaml
\`\`\`

### Multiple seeds
\`\`\`bash
for seed in 42 123 456; do
    # Modify config with seed and run
    done
\`\`\`

## Results
- [ ] Baseline results
- [ ] Ablation studies
- [ ] Hyperparameter tuning
EOF
    
    echo "✓ Created Experiments directory with templates"
fi

# Create Results directory
RES_DIR="Results/${YEAR}/${DIR_NAME}"
echo "Creating: $RES_DIR"
mkdir -p "$RES_DIR/metrics"
mkdir -p "$RES_DIR/plots"
mkdir -p "$RES_DIR/tables"

# Create README
cat > "$RES_DIR/README.md" << EOF
# $TITLE Results

## Overview
Results from reproducing "$TITLE" ($YEAR)

## Metrics
- `metrics/` - Raw metrics from experiments

## Plots
- `plots/` - Generated visualizations

## Tables
- `tables/` - Formatted result tables

## Comparison with Paper
| Metric | Paper | Our Implementation | Difference |
|--------|-------|---------------------|------------|
| TBD    | TBD   | TBD                 | TBD        |
EOF

echo "✓ Created Results directory"

# Create Notes directory
NOTES_DIR="Notes/${DIR_NAME}"
echo "Creating: $NOTES_DIR"
mkdir -p "$NOTES_DIR"

# Create notes files
cat > "$NOTES_DIR/papers.md" << EOF
# $TITLE - Related Papers

## Main Paper
- **Title**: $TITLE
- **Year**: $YEAR
- **Status**: Reading/Implementing

## Related Papers
- [Paper 1](url) - Description
- [Paper 2](url) - Description

## Follow-up Work
- [Paper A](url) - Description
EOF

cat > "$NOTES_DIR/concepts.md" << EOF
# $TITLE - Key Concepts

## Main Concepts
- Concept 1: Description
- Concept 2: Description
- Concept 3: Description

## Important Details
- Detail 1
- Detail 2

## Open Questions
- Question 1?
- Question 2?
EOF

cat > "$NOTES_DIR/README.md" << EOF
# $TITLE Notes

## Overview
Study notes for "$TITLE" ($YEAR)

## Files
- `papers.md` - Related papers
- `concepts.md` - Key concepts and details

## Status
- [ ] Paper read
- [ ] Notes written
- [ ] Implementation started
- [ ] Results reproduced
EOF

echo "✓ Created Notes directory"

echo ""
echo "=========================================="
echo "Setup complete! ✨"
echo ""
echo "Created directories:"
echo "  - Papers/${YEAR}/${DIR_NAME}"
if [[ "$WITH_IMPLEMENTATION" == true ]]; then
    echo "  - Implementations/${YEAR}/${DIR_NAME}"
fi
if [[ "$WITH_EXPERIMENT" == true ]]; then
    echo "  - Experiments/${YEAR}/${DIR_NAME}"
fi
echo "  - Results/${YEAR}/${DIR_NAME}"
echo "  - Notes/${DIR_NAME}"
echo ""
echo "Next steps:"
echo "  1. Add paper PDF to Papers/${YEAR}/${DIR_NAME}/paper.pdf"
echo "  2. Edit summary.md with your notes"
echo "  3. Update metadata.yaml with paper details"
if [[ "$WITH_IMPLEMENTATION" == true ]]; then
    echo "  4. Implement the model in Implementations/${YEAR}/${DIR_NAME}/src/model.py"
fi
if [[ "$WITH_EXPERIMENT" == true ]]; then
    echo "  5. Configure experiments in Experiments/${YEAR}/${DIR_NAME}/configs/"
fi
echo ""
echo "To commit your changes:"
echo "  git add Research/"
echo "  git commit -m \"Add paper: $TITLE\""
echo "=========================================="
