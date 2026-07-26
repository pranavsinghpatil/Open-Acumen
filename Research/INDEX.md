# Research Papers Index

This file serves as a central index for all papers in the repository. Use it to quickly find papers by topic, year, or status.

## 📊 Statistics

- **Total Papers**: 0
- **By Year**: 
- **By Status**: 
- **By Topic**: 

---

## 📅 By Year

### 2024

| Paper | Authors | Venue | Status | Implementation | Reproduction | Tags |
|-------|---------|-------|--------|----------------|--------------|------|
| [Paper Title](Papers/2024/paper_name/summary.md) | Author 1, Author 2 | Conference | 📖 Read | ❌ Not Started | ❌ Not Attempted | tag1, tag2 |

### 2023

| Paper | Authors | Venue | Status | Implementation | Reproduction | Tags |
|-------|---------|-------|--------|----------------|--------------|------|
| [Paper Title](Papers/2023/paper_name/summary.md) | Author 1, Author 2 | Conference | 📖 Read | ❌ Not Started | ❌ Not Attempted | tag1, tag2 |

### 2022

| Paper | Authors | Venue | Status | Implementation | Reproduction | Tags |
|-------|---------|-------|--------|----------------|--------------|------|

### 2021

| Paper | Authors | Venue | Status | Implementation | Reproduction | Tags |
|-------|---------|-------|--------|----------------|--------------|------|

### 2020

| Paper | Authors | Venue | Status | Implementation | Reproduction | Tags |
|-------|---------|-------|--------|----------------|--------------|------|

### 2019

| Paper | Authors | Venue | Status | Implementation | Reproduction | Tags |
|-------|---------|-------|--------|----------------|--------------|------|

### 2018

| Paper | Authors | Venue | Status | Implementation | Reproduction | Tags |
|-------|---------|-------|--------|----------------|--------------|------|

### 2017

| Paper | Authors | Venue | Status | Implementation | Reproduction | Tags |
|-------|---------|-------|--------|----------------|--------------|------|

### Before 2017

| Paper | Authors | Venue | Status | Implementation | Reproduction | Tags |
|-------|---------|-------|--------|----------------|--------------|------|

---

## 🏷️ By Topic

### Machine Learning

| Paper | Year | Status | Implementation | Reproduction |
|-------|------|--------|----------------|--------------|

### Computer Vision

| Paper | Year | Status | Implementation | Reproduction |
|-------|------|--------|----------------|--------------|

### Natural Language Processing

| Paper | Year | Status | Implementation | Reproduction |
|-------|------|--------|----------------|--------------|

### Reinforcement Learning

| Paper | Year | Status | Implementation | Reproduction |
|-------|------|--------|----------------|--------------|

### Generative Models

| Paper | Year | Status | Implementation | Reproduction |
|-------|------|--------|----------------|--------------|

### Transformers

| Paper | Year | Status | Implementation | Reproduction |
|-------|------|--------|----------------|--------------|

### Diffusion Models

| Paper | Year | Status | Implementation | Reproduction |
|-------|------|--------|----------------|--------------|

### Optimization

| Paper | Year | Status | Implementation | Reproduction |
|-------|------|--------|----------------|--------------|

### Architecture

| Paper | Year | Status | Implementation | Reproduction |
|-------|------|--------|----------------|--------------|

---

## 📚 By Status

### To Read

Papers that have been downloaded but not yet read.

| Paper | Year | Authors | Venue | Tags |
|-------|------|---------|-------|------|

### Reading

Papers currently being read.

| Paper | Year | Authors | Venue | Progress | Tags |
|-------|------|---------|-------|----------|------|

### Read

Papers that have been read and summarized.

| Paper | Year | Authors | Venue | Rating | Tags |
|-------|------|---------|-------|--------|------|

### Implementing

Papers currently being implemented.

| Paper | Year | Authors | Venue | Progress | Tags |
|-------|------|---------|-------|----------|------|

### Implemented

Papers with complete implementations.

| Paper | Year | Authors | Venue | Implementation | Tags |
|-------|------|---------|-------|----------------|------|

### Reproduced

Papers with successful reproductions.

| Paper | Year | Authors | Venue | Results | Tags |
|-------|------|---------|-------|---------|------|

---

## 🎯 Priority Papers

### High Priority

| Paper | Year | Why | Status |
|-------|------|-----|--------|

### Medium Priority

| Paper | Year | Why | Status |
|-------|------|-----|--------|

### Low Priority

| Paper | Year | Why | Status |
|-------|------|-----|--------|

---

## 🏆 Recommended Reading Path

### For Beginners

1. **Start Here**: [Paper Title](Papers/YYYY/paper_name/summary.md)
   - Why: Great introduction to the field
   - Difficulty: Easy
   
2. **Next**: [Paper Title](Papers/YYYY/paper_name/summary.md)
   - Why: Builds on previous concepts
   - Difficulty: Medium

### For Intermediate

1. **Start Here**: [Paper Title](Papers/YYYY/paper_name/summary.md)
   - Why: Important foundational work
   - Difficulty: Medium

### For Advanced

1. **Start Here**: [Paper Title](Papers/YYYY/paper_name/summary.md)
   - Why: Cutting-edge research
   - Difficulty: Hard

---

## 📈 Implementation Progress

### In Progress

| Paper | Year | % Complete | Last Update | Next Steps |
|-------|------|------------|-------------|------------|

### Completed

| Paper | Year | Date | Results | Notes |
|-------|------|------|---------|-------|

---

## 🔍 Search Tips

### By Author

Use `grep` to search for papers by author:
```bash
cd Research/Papers
grep -r "Author Name" --include="*.yaml" --include="*.md"
```

### By Keyword

Search for papers containing a keyword:
```bash
cd Research/Papers
grep -r "keyword" --include="*.md" --include="*.yaml"
```

### By Tag

Find all papers with a specific tag:
```bash
cd Research/Papers
grep -r "tag_name" --include="metadata.yaml" -l | xargs dirname | sort -u
```

### By Status

Find all papers with a specific status:
```bash
cd Research/Papers
grep -r 'status: "reading"' --include="metadata.yaml" -l | xargs dirname | sort -u
```

---

## 📝 How to Update This Index

### Manual Update

1. Add new papers to the appropriate year section
2. Update the statistics at the top
3. Add to relevant topic sections
4. Update status sections

### Automated Update

Run the update script:
```bash
./scripts/update_index.sh
```

This will automatically:
- Scan all paper directories
- Extract metadata from `metadata.yaml` files
- Update the index with current information

---

## 🎨 Legend

### Status Icons

- 📄 - To Read
- 📖 - Reading
- ✅ - Read
- 🛠️ - Implementing
- 💻 - Implemented
- 🔬 - Reproduced

### Implementation Status

- ❌ - Not Started
- 🟡 - In Progress
- ✅ - Completed

### Reproduction Status

- ❌ - Not Attempted
- 🟡 - Partial
- ✅ - Full

---

## 📌 Notes

- This index is meant to be a living document
- Update it regularly as you add new papers
- Use the automated script when possible
- Keep the format consistent for easy reading

---

*Last updated: 2024-07-26*
