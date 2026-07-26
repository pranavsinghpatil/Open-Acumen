# Results

This directory stores results from paper reproduction experiments. Organize results by year and paper, with clear documentation and comparisons.

## Structure

```
Results/
├── {Year}/
│   └── {Paper_Name}/
│       ├── metrics/               # Quantitative results
│       │   ├── baseline.json      # Baseline results
│       │   ├── ablation.json      # Ablation study results
│       │   └── summary.csv        # Aggregated results
│       ├── plots/                 # Visualizations
│       │   ├── loss_curve.png     # Training loss curve
│       │   ├── accuracy.png       # Accuracy plot
│       │   └── comparison.png      # Comparison with paper
│       ├── tables/                # Result tables
│       │   ├── main_results.md     # Main results table
│       │   └── ablation.md        # Ablation study table
│       ├── analysis/              # Analysis and discussion
│       │   ├── variance.md        # Variance analysis
│       │   ├── error_analysis.md  # Error analysis
│       │   └── ...
│       └── README.md              # Results summary
└── README.md
```

## Results Organization

### 1. Metrics

Store quantitative results in JSON format for easy parsing:

```json
{
  "paper": "Attention Is All You Need",
  "implementation": "transformer_baseline",
  "experiment_id": "transformer_baseline_seed42",
  "date": "2024-01-01",
  "metrics": {
    "train": {
      "loss": 0.123,
      "accuracy": 0.98,
      "perplexity": 1.5
    },
    "val": {
      "loss": 0.145,
      "accuracy": 0.92,
      "perplexity": 2.1
    },
    "test": {
      "loss": 0.148,
      "accuracy": 0.91,
      "perplexity": 2.2
    }
  },
  "config": {
    "model": "transformer",
    "hidden_size": 512,
    "num_layers": 6,
    "batch_size": 32,
    "learning_rate": 0.001
  },
  "hardware": {
    "gpu": "NVIDIA A100",
    "memory_gb": 40,
    "time_hours": 2.5
  },
  "notes": "Baseline run with default hyperparameters"
}
```

### 2. Summary CSV

Create a summary CSV for easy comparison:

```csv
experiment_id,config,seed,train_loss,val_loss,test_loss,accuracy,f1_score,duration_hours
transformer_baseline_seed42,baseline,42,0.123,0.145,0.148,0.92,0.89,2.5
transformer_baseline_seed123,baseline,123,0.121,0.147,0.150,0.91,0.88,2.4
transformer_ablation_seed42,ablation1,42,0.135,0.158,0.160,0.88,0.85,2.6
```

### 3. Plots

Generate plots for visualization:
- Training curves (loss, accuracy)
- Comparison with paper results
- Ablation study results
- Hyperparameter sensitivity

Example plotting script:
```python
import matplotlib.pyplot as plt
import json

# Load results
with open('metrics/baseline.json') as f:
    results = json.load(f)

# Plot training curve
plt.figure(figsize=(10, 6))
plt.plot(results['train_loss'], label='Train Loss')
plt.plot(results['val_loss'], label='Val Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.title('Training Curve')
plt.legend()
plt.savefig('plots/loss_curve.png')
plt.close()
```

## README Template

Each paper results directory should include a `README.md`:

```markdown
# {Paper Name} Results

## Overview
Results from reproducing "Paper Title" (Year)

## Main Results

### Comparison with Original Paper

| Metric | Paper | Our Implementation | Difference |
|--------|-------|---------------------|------------|
| Accuracy | 93.2% | 92.1% | -1.1% |
| F1 Score | 91.5% | 89.3% | -2.2% |
| Loss | 0.14 | 0.148 | +0.008 |

### Training Details
- **Batch Size**: 32
- **Learning Rate**: 0.001
- **Epochs**: 100
- **Optimizer**: Adam
- **Hardware**: NVIDIA A100 (40GB)

## Experiment Results

### Baseline
| Seed | Train Loss | Val Loss | Test Loss | Accuracy |
|------|------------|----------|-----------|----------|
| 42   | 0.123      | 0.145    | 0.148     | 92.1%    |
| 123  | 0.121      | 0.147    | 0.150     | 91.8%    |
| 456  | 0.124      | 0.146    | 0.149     | 92.0%    |
| **Avg** | **0.123** | **0.146** | **0.149** | **91.9%** |

### Ablation Study
| Config | Val Loss | Accuracy |
|--------|----------|----------|
| Baseline | 0.145 | 92.1% |
| No Attention | 0.158 | 88.2% |
| No Residual | 0.165 | 87.5% |
| Fewer Layers | 0.152 | 90.3% |

## Analysis

### Variance
- Standard deviation across seeds: 0.002
- Results are stable across different random seeds

### Error Analysis
- Main errors come from [describe common error patterns]
- See `analysis/error_analysis.md` for details

### Limitations
- [List any limitations of your reproduction]
- [Differences from original implementation]

## Files
- `metrics/`: Raw metrics from each run
- `plots/`: Generated visualizations
- `tables/`: Formatted result tables
- `analysis/`: Detailed analysis

## How to Reproduce
```bash
# Run baseline experiment
python scripts/run_experiment.py --config configs/baseline.yaml --seed 42

# Run all experiments
bash scripts/run_all.sh
```
```

## Comparison Tables

### Markdown Tables

Create clean markdown tables for results:

```markdown
| Model | Dataset | Accuracy | F1 | Precision | Recall |
|-------|---------|----------|----|-----------|--------|
| Baseline | Train | 98.2% | 97.8% | 98.0% | 97.6% |
| Baseline | Val | 92.1% | 89.3% | 89.5% | 89.1% |
| Baseline | Test | 91.8% | 88.9% | 89.1% | 88.7% |
| Ablation | Test | 88.2% | 85.1% | 85.3% | 84.9% |
```

### LaTeX Tables

For academic writing, include LaTeX versions:

```latex
\begin{table}[h]
\centering
\caption{Main Results}
\label{tab:results}
\begin{tabular}{lcccc}
\toprule
Model & Dataset & Accuracy & F1 & Precision \\
\midrule
Baseline & Train & 98.2\% & 97.8\% & 98.0\% \\
Baseline & Val & 92.1\% & 89.3\% & 89.5\% \\
Baseline & Test & 91.8\% & 88.9\% & 89.1\% \\
Ablation & Test & 88.2\% & 85.1\% & 85.3\% \\
\bottomrule
\end{tabular}
\end{table}
```

## Visualization

### Recommended Plots

1. **Training Curves**: Loss and accuracy over epochs
2. **Comparison Plots**: Your results vs. paper results
3. **Ablation Plots**: Impact of different components
4. **Hyperparameter Plots**: Sensitivity to hyperparameters
5. **Error Analysis Plots**: Error distributions, confusion matrices

### Plot Formats

- Use **PNG** for quick viewing
- Use **PDF** or **SVG** for publications (vector graphics)
- Use consistent color schemes
- Include proper labels and legends

## Statistical Analysis

### Averaging Results

```python
import numpy as np
import json

# Load all results
results = []
for seed in [42, 123, 456]:
    with open(f'metrics/baseline_seed{seed}.json') as f:
        results.append(json.load(f))

# Calculate mean and std
accuracies = [r['metrics']['test']['accuracy'] for r in results]
mean_acc = np.mean(accuracies)
std_acc = np.std(accuracies)

print(f"Mean Accuracy: {mean_acc:.3f} ± {std_acc:.3f}")
```

### Significance Testing

```python
from scipy import stats

# Compare two configurations
acc_baseline = [0.92, 0.91, 0.92]
acc_ablation = [0.88, 0.87, 0.89]

# Paired t-test
t_stat, p_value = stats.ttest_rel(acc_baseline, acc_ablation)
print(f"p-value: {p_value:.4f}")
```

## Example Structure

```
Results/
├── 2017/
│   └── transformer/
│       ├── metrics/
│       │   ├── baseline_seed42.json
│       │   ├── baseline_seed123.json
│       │   ├── ablation_seed42.json
│       │   └── summary.csv
│       ├── plots/
│       │   ├── loss_curve.png
│       │   ├── accuracy.png
│       │   └── comparison.png
│       ├── tables/
│       │   ├── main_results.md
│       │   └── ablation.md
│       ├── analysis/
│       │   ├── variance.md
│       │   └── error_analysis.md
│       └── README.md
└── 2018/
    └── bert/
        ├── metrics/
        │   └── baseline.json
        ├── plots/
        │   └── loss_curve.png
        └── README.md
```

## Best Practices

1. **Be transparent**: Report all results, not just the best ones
2. **Include variance**: Run multiple seeds and report mean ± std
3. **Compare fairly**: Use the same evaluation protocol as the paper
4. **Document everything**: Configuration, hardware, timing
5. **Visualize**: Create plots to show trends
6. **Analyze errors**: Understand where your implementation differs
7. **Update regularly**: Keep results up to date with new experiments
