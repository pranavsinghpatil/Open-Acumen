# Notes

This directory stores study notes, literature reviews, and research insights. Organize notes by topic or research area.

## Structure

```
Notes/
├── {Topic}/
│   ├── papers.md                # List of related papers
│   ├── concepts.md              # Key concepts and definitions
│   ├── literature_review.md     # Comprehensive literature review
│   ├── open_questions.md        # Unanswered questions and ideas
│   ├── resources.md             # Useful resources (blogs, tutorials, etc.)
│   └── README.md                # Topic overview
├── {Another_Topic}/
│   ├── papers.md
│   └── ...
└── README.md
```

## Note Types

### 1. Paper Notes

For individual paper notes, use the template from `../Templates/paper_summary.md`.

### 2. Topic Notes

For broader topics, create a comprehensive overview:

```markdown
# {Topic Name}

## Overview
Brief introduction to the topic.

## Key Concepts

### Concept 1
- Definition
- Importance
- Applications

### Concept 2
- Definition
- Importance
- Applications

## Related Papers

### Foundational Papers
1. [Paper 1](url) - Key contribution
2. [Paper 2](url) - Key contribution

### Recent Advances
1. [Paper A](url) - New technique
2. [Paper B](url) - Improved results

## Literature Review

### Timeline
- 2010: First approach [Paper]
- 2015: Major improvement [Paper]
- 2020: State-of-the-art [Paper]

### Taxonomy
- **Category 1**: Description
  - Subcategory 1.1
  - Subcategory 1.2
- **Category 2**: Description

### Comparisons
| Method | Pros | Cons | Performance |
|--------|------|------|-------------|
| Method A | Fast | Less accurate | 85% |
| Method B | Accurate | Slow | 92% |

## Open Questions
1. How to improve X?
2. Can we combine Y and Z?
3. What are the theoretical limits?

## Resources
- [Blog Post](url) - Good explanation
- [Tutorial](url) - Step-by-step guide
- [Video](url) - Visual explanation
- [Code](url) - Reference implementation
```

### 3. Literature Review

For comprehensive literature reviews:

```markdown
# Literature Review: {Topic}

## Scope
- Time period: 2010-2024
- Keywords: keyword1, keyword2, keyword3
- Databases: arXiv, Google Scholar, ACL Anthology

## Methodology
- Search strategy
- Inclusion criteria
- Exclusion criteria

## Results

### Paper Count by Year
| Year | Count |
|------|-------|
| 2010 | 5 |
| 2015 | 20 |
| 2020 | 50 |
| 2024 | 30 |

### Key Findings
1. Finding 1
2. Finding 2
3. Finding 3

### Trends
- Trend 1 description
- Trend 2 description

## Discussion
- Analysis of findings
- Implications
- Future directions

## References
- [1] Paper 1
- [2] Paper 2
```

## README Template

Each topic directory should include a `README.md`:

```markdown
# {Topic Name}

## Description
Brief description of the topic and its importance.

## Key Papers
- [Paper 1](url) - Why it's important
- [Paper 2](url) - Key contribution
- [Paper 3](url) - Recent advance

## Key Concepts
- Concept 1
- Concept 2
- Concept 3

## Open Problems
- Problem 1
- Problem 2

## Resources
- [Resource 1](url)
- [Resource 2](url)

## Related Topics
- [Related Topic 1](../related_topic_1)
- [Related Topic 2](../related_topic_2)
```

## Example Structure

```
Notes/
├── attention_mechanisms/
│   ├── papers.md
│   ├── concepts.md
│   ├── literature_review.md
│   ├── open_questions.md
│   └── README.md
├── transformers/
│   ├── papers.md
│   ├── concepts.md
│   └── README.md
├── diffusion_models/
│   ├── papers.md
│   ├── concepts.md
│   └── README.md
└── README.md
```

## Note-Taking Tips

### 1. Be Consistent
- Use consistent formatting
- Use consistent naming conventions
- Use consistent file organization

### 2. Be Concise
- Summarize key points
- Avoid copying entire papers
- Focus on insights and understanding

### 3. Be Critical
- Note limitations
- Question assumptions
- Identify gaps

### 4. Connect Ideas
- Link related papers
- Connect to other topics
- Identify patterns

### 5. Track Sources
- Always cite sources
- Include URLs or DOIs
- Note when you read each paper

## Tools for Note-Taking

### 1. Markdown Editors
- [VS Code](https://code.visualstudio.com/) with Markdown extensions
- [Typora](https://typora.io/) - Simple and clean
- [Obsidian](https://obsidian.md/) - Knowledge base with linking

### 2. Reference Managers
- [Zotero](https://www.zotero.org/) - Free and open-source
- [Mendeley](https://www.mendeley.com/) - Cloud-based
- [JabRef](https://www.jabref.org/) - BibTeX-focused

### 3. Note-Taking Apps
- [Notion](https://www.notion.so/) - Flexible and collaborative
- [OneNote](https://www.onenote.com/) - Microsoft's offering
- [Evernote](https://evernote.com/) - Simple and reliable

## Example: Paper Notes

```markdown
# Attention Is All You Need - Notes

**Date Read**: 2024-01-01
**Status**: Read, Implementing
**Rating**: ★★★★★

## Summary
- Proposes transformer architecture
- Self-attention mechanism
- Parallelizable training

## Key Contributions
1. Self-attention mechanism
2. Multi-head attention
3. Positional encoding
4. Transformer architecture

## Methodology
- Encoder-decoder architecture
- Self-attention layers
- Feed-forward networks
- Layer normalization
- Residual connections

## Results
- Achieves SOTA on machine translation
- 28.4 BLEU on WMT 2014 English-to-German
- 41.8 BLEU on WMT 2014 English-to-French
- Training time: 12 hours on 8 GPUs

## Strengths
- Novel architecture
- Parallelizable
- Good results
- Wide applicability

## Weaknesses
- Quadratic complexity with sequence length
- Memory intensive
- Requires large amounts of data

## Implementation Notes
- Need to implement multi-head attention
- Positional encoding is crucial
- Layer normalization before or after?

## Questions
- How to handle variable-length sequences?
- Can we reduce the quadratic complexity?
- How to apply to other tasks?

## Related Papers
- [Neural Machine Translation by Jointly Learning to Align and Translate](url)
- [Long Short-Term Memory](url)
- [Convolutional Sequence to Sequence Learning](url)

## Resources
- [Official TensorFlow Implementation](url)
- [PyTorch Implementation](url)
- [Blog Post Explanation](url)
```

## Best Practices

1. **Date your notes**: Always include when you read/wrote the notes
2. **Use tags**: Tag notes with topics, status, etc.
3. **Link notes**: Connect related notes with links
4. **Review regularly**: Periodically review and update notes
5. **Backup**: Keep backups of your notes
6. **Searchable**: Make notes searchable with good keywords
7. **Actionable**: Include action items and next steps
