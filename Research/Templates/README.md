# Templates

This directory contains reusable templates for research paper reproduction. Use these templates to maintain consistency across the repository.

## Available Templates

### 1. Paper Summary Template
- **File**: `paper_summary.md`
- **Use**: For writing consistent paper summaries
- **Format**: Markdown

### 2. Implementation Template
- **File**: `implementation.py`
- **Use**: Python template for paper implementations
- **Format**: Python

### 3. Experiment Configuration Template
- **File**: `experiment_config.yaml`
- **Use**: YAML template for experiment configurations
- **Format**: YAML

### 4. Metadata Template
- **File**: `metadata.yaml`
- **Use**: Template for paper metadata
- **Format**: YAML

### 5. README Template
- **File**: `readme_template.md`
- **Use**: Template for various README files
- **Format**: Markdown

### 6. Experiment Script Template
- **File**: `experiment_script.py`
- **Use**: Template for running experiments
- **Format**: Python

## How to Use Templates

### 1. Copy the Template

```bash
# For a new paper
cp Templates/paper_summary.md Research/Papers/{Year}/{Paper_Name}/summary.md

# For a new implementation
cp Templates/implementation.py Research/Implementations/{Year}/{Paper_Name}/src/model.py

# For a new experiment config
cp Templates/experiment_config.yaml Research/Experiments/{Year}/{Paper_Name}/configs/baseline.yaml
```

### 2. Fill in the Blanks

Replace all placeholder text (in `{{curly braces}}` or `[square brackets]`) with actual content.

### 3. Customize as Needed

Templates provide a starting point. Feel free to customize them for your specific needs.

## Creating New Templates

If you find yourself creating similar files repeatedly:

1. Create a template in this directory
2. Document its purpose in this README
3. Use it consistently across the repository

## Template Guidelines

1. **Be comprehensive**: Include all common sections
2. **Be clear**: Use descriptive placeholders
3. **Be consistent**: Follow the same format across templates
4. **Document**: Explain how to use each template
5. **Update**: Keep templates up to date

## Example: Using the Paper Summary Template

```bash
# Create a new paper directory
mkdir -p Research/Papers/2017/attention_is_all_you_need

# Copy the template
cp Templates/paper_summary.md Research/Papers/2017/attention_is_all_you_need/summary.md

# Edit the summary
nano Research/Papers/2017/attention_is_all_you_need/summary.md

# Fill in the details
# - Replace placeholders with actual content
# - Add your notes and insights
# - Save the file
```

## Template Maintenance

- Regularly review and update templates
- Add new templates as needed
- Remove unused templates
- Keep templates consistent with repository conventions
