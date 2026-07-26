# Open-Acumen — Public Knowledge & Projects

This repository is a public collection of my personal learning notes, mini-projects, experiments, and notebooks. It is intended for sharing educational content, public datasets, and project demos.

## Top-level folders (overview)

- `Learning/` — curated notes, study guides, and tutorials.
- `Mini-Programs/` — small utilities, demo scripts, and experiments.
- `Projects/` — multi-file projects with docs and examples.
- `Notebooks/` — Jupyter notebooks for exploration and reproducible experiments.
- `Datasets/` — public or cleaned datasets used by experiments.
- `Tools/` — reusable helpers, scripts, and developer tooling.
- `Docs/` — longer writeups, design notes, and documentation.
- `Archive/` — retired experiments and backups.
- `Research/` — **NEW: Research papers reproduction hub** 📚

Each top-level folder contains a README describing conventions and contents.

## Research Papers Reproduction 🚀

The `Research/` directory is a comprehensive framework for studying, implementing, and reproducing research papers. It includes:

- **Papers/**: Organized collection of research papers with metadata and summaries
- **Implementations/**: Code implementations of papers with proper documentation
- **Experiments/**: Reproducible experiment runs with configurations and logs
- **Datasets/**: Datasets used for reproduction (with proper licensing)
- **Results/**: Results, comparisons, and analysis
- **Notes/**: Study notes, literature reviews, and research insights
- **Templates/**: Reusable templates for consistent documentation

### Quick Start with Research

1. **Add a new paper**:
   ```bash
   mkdir -p Research/Papers/2024/new_paper
   cp Research/Templates/paper_summary.md Research/Papers/2024/new_paper/summary.md
   # Edit the summary with paper details
   ```

2. **Implement a paper**:
   ```bash
   mkdir -p Research/Implementations/2024/new_paper/src
   cp Research/Templates/implementation.py Research/Implementations/2024/new_paper/src/model.py
   # Edit and implement the model
   ```

3. **Run experiments**:
   ```bash
   mkdir -p Research/Experiments/2024/new_paper/configs
   cp Research/Templates/experiment_config.yaml Research/Experiments/2024/new_paper/configs/baseline.yaml
   # Edit config and run experiments
   ```

See `Research/README.md` for complete documentation.

## Usage

- Browse the folders to find materials by type (notes, code, notebooks).
- Fork or reuse public examples; add attribution if you republish significant material.
- Use the `Research/` directory for systematic paper reproduction.

## Contribution

Contributions are welcome. See `CONTRIBUTIONS.md` for guidance. Maintain clear README files for new folders and follow existing naming conventions.

---

*Organized for systematic learning and research reproduction.*
