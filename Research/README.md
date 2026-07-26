# Research Papers Reproduction Hub

This directory is dedicated to the systematic study, implementation, and reproduction of research papers. It provides a structured framework for organizing paper readings, code implementations, experiments, and results.

## Structure

```
Research/
├── Papers/                    # Paper PDFs, arXiv links, and metadata
│   ├── {Year}/
│   │   ├── {Paper_Name}/
│   │   │   ├── paper.pdf      # Original paper
│   │   │   ├── metadata.yaml # Paper metadata (authors, venue, etc.)
│   │   │   └── summary.md    # Key insights and notes
│   └── README.md
│
├── Implementations/          # Code implementations of papers
│   ├── {Year}/
│   │   ├── {Paper_Name}/
│   │   │   ├── src/          # Source code
│   │   │   ├── config/       # Configuration files
│   │   │   ├── requirements.txt
│   │   │   ├── README.md     # Implementation details
│   │   │   └── LICENSE       # Original paper license if applicable
│   └── README.md
│
├── Experiments/              # Reproduction experiments
│   ├── {Year}/
│   │   ├── {Paper_Name}/
│   │   │   ├── runs/         # Experiment runs with different seeds/params
│   │   │   ├── logs/         # Training/inference logs
│   │   │   ├── configs/      # Experiment configurations
│   │   │   └── README.md     # Experiment setup and results
│   └── README.md
│
├── Datasets/                 # Datasets used for reproduction
│   ├── {Dataset_Name}/
│   │   ├── raw/             # Original dataset
│   │   ├── processed/       # Preprocessed data
│   │   ├── README.md        # Dataset description and source
│   │   └── download.sh      # Download script if applicable
│   └── README.md
│
├── Results/                  # Results and comparisons
│   ├── {Year}/
│   │   ├── {Paper_Name}/
│   │   │   ├── tables/       # Results tables
│   │   │   ├── plots/        # Generated visualizations
│   │   │   ├── metrics.json  # Quantitative results
│   │   │   └── README.md     # Results analysis
│   └── README.md
│
├── Notes/                    # Study notes and literature reviews
│   ├── {Topic}/
│   │   ├── papers.md        # List of related papers
│   │   ├── concepts.md      # Key concepts
│   │   └── README.md
│   └── README.md
│
└── Templates/                # Reusable templates
    ├── paper_summary.md     # Template for paper summaries
    ├── implementation.py     # Code implementation template
    ├── experiment_config.yaml # Experiment configuration template
    └── README.md
```

## Workflow

### 1. Adding a New Paper

1. **Download the paper** to `Research/Papers/{Year}/{Paper_Name}/paper.pdf`
2. **Create metadata** in `metadata.yaml`:
   ```yaml
   title: "Paper Title"
   authors: ["Author 1", "Author 2"]
   venue: "Conference/Journal"
   year: 2024
   arxiv_id: "2401.12345"
   url: "https://arxiv.org/abs/2401.12345"
   tags: ["tag1", "tag2"]
   ```
3. **Write a summary** in `summary.md` covering:
   - Problem statement
   - Key contributions
   - Methodology
   - Results
   - Limitations

### 2. Implementing a Paper

1. **Create implementation directory** in `Research/Implementations/{Year}/{Paper_Name}/`
2. **Add source code** in `src/` directory
3. **Document dependencies** in `requirements.txt` or `environment.yaml`
4. **Write implementation notes** in `README.md`:
   - Implementation details
   - Differences from original paper
   - Known issues
   - Performance notes

### 3. Running Experiments

1. **Create experiment directory** in `Research/Experiments/{Year}/{Paper_Name}/`
2. **Define configurations** in `configs/`
3. **Run experiments** and save outputs to `runs/`
4. **Log everything** in `logs/`
5. **Document setup** in `README.md`

### 4. Recording Results

1. **Save metrics** in `Research/Results/{Year}/{Paper_Name}/metrics.json`
2. **Generate plots** and save to `plots/`
3. **Create comparison tables** in `tables/`
4. **Analyze results** in `README.md`

## Naming Conventions

- **Paper directories**: Use the paper title in lowercase with underscores, e.g., `attention_is_all_you_need`
- **Implementation directories**: Match the paper directory name
- **Experiment directories**: Use descriptive names like `exp1_baseline`, `exp2_ablation`
- **Files**: Use lowercase with underscores or hyphens

## Tools & Recommendations

- **Paper management**: Use [Zotero](https://www.zotero.org/) or [Mendeley](https://www.mendeley.com/)
- **Experiment tracking**: Use [Weights & Biases](https://wandb.ai/), [MLflow](https://mlflow.org/), or [TensorBoard](https://www.tensorflow.org/tensorboard)
- **Reproducibility**: Use [DVC](https://dvc.org/) for data versioning
- **Environment management**: Use [conda](https://docs.conda.io/) or [venv](https://docs.python.org/3/library/venv.html)

## Contributing

When adding new papers or implementations:
1. Follow the directory structure
2. Include proper attribution
3. Document your work thoroughly
4. Keep experiments reproducible
5. Update the main README with new additions

## Index

See the individual README files in each subdirectory for more specific guidelines.
