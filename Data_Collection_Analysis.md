# Data Collection and Analysis Report
## Mobile Legends: Bang Bang Hero Statistics

### Data Collection

#### Methodology
Data collection is the systematic process of gathering, measuring, and analyzing information to answer research questions and test hypotheses. For this project, we employed a secondary data collection approach, utilizing an existing Mobile Legends hero dataset as our foundation.

#### Data Source and Processing

##### Initial Dataset
The primary data source was obtained from the Mobile Legends game files and community databases, containing comprehensive information about all heroes. The original dataset included attributes such as:
- Hero name and title
- Primary and secondary roles
- Lane assignments
- Base statistics (HP, HP Regeneration, Movement Speed, Defense values)
- Competitive performance metrics (Esports wins and losses)

##### Data Cleaning and Refinement
The raw dataset underwent several refinement stages:
- **Completeness Verification**: All 114 heroes were verified for complete attribute information
- **Column Selection**: Focus was placed on core combat statistics relevant to role analysis
- **Derived Metrics**: Win rate was calculated as: `Win Rate = (Wins / (Wins + Losses)) × 100`
- **Outlier Identification**: Heroes with extreme values (e.g., X.Borg's unique HP mechanic at 918 HP) were noted for contextual interpretation

##### Data Organization
The refined dataset was organized for collaborative analysis and processing. The final dataset contains:
- **114 heroes** with complete attribute profiles
- 11 numerical variables for statistical analysis
- 3 categorical variables (Role, Lane, Name)
- Competitive performance data from professional esports tournaments

#### Dataset Structure

The final dataset includes the following variables:

**Categorical Variables:**
- **Name**: Hero identifier
- **Primary_Role**: Main role classification (Tank, Fighter, Assassin, Mage, Marksman, Support)
- **Lane**: Preferred lane assignment (EXP Lane, Mid, Gold Lane, Jungler, Roamer)

**Numerical Variables:**
- **HP**: Base health points (range: 918 - 2909)
- **Mov_Speed**: Movement speed (range: 240 - 270)
- **Esport_Wins**: Number of professional tournament wins
- **Esport_Loss**: Number of professional tournament losses
- **Win_Rate**: Calculated competitive win percentage

**Dataset and analysis**: https://github.com/lilyofthevaleys/ml-hero-analysis

This comprehensive dataset provides a robust foundation for statistical analysis of hero attributes, role comparisons, and competitive performance patterns in Mobile Legends: Bang Bang.

---

## Descriptive Statistics and Data Visualization

### Statistical Summary

| Metric | HP | Movement Speed | Win Rate |
|--------|------|----------------|----------|
| **Mean** | 2574 | 252 | 49.49% |
| **Median** | 2556 | 252 | 49.81% |
| **Mode** | 2501 | 240 | 50.00% |
| **Std Dev** | 265 | 8 | 6.68 |
| **Range** | 1991 | 30 | 57.86% |
| **Min** | 918 | 240 | 0.00% |
| **Max** | 2909 | 270 | 57.86% |

### Interpretation of Descriptive Statistics

#### Health Points (HP)
The average HP across all heroes is **2574**, with a median of 2556, indicating a relatively symmetric distribution. The mode of 2501 represents the most common HP value, frequently appearing among Mage heroes. The standard deviation of 265 reveals considerable variability, with heroes ranging from X.Borg's unique 918 HP (due to his special armor mechanic) to Hylos' massive 2909 HP. This wide range reflects the diverse role designs, where Tanks prioritize durability while Assassins and Mages sacrifice HP for mobility and damage.

#### Movement Speed
The average movement speed is **252**, with both the median and mode showing consistent values around this central tendency. The mode of 240 is predominantly found among Mage and Marksman heroes. The relatively small standard deviation of 8 suggests that movement speed is carefully balanced across roles, with deliberate design constraints. The range extends from 240 to 270, with Assassins and some Fighters occupying the higher end to enable their mobility-dependent playstyle.

#### Win Rate
The average win rate across all heroes is **49.49%**, remarkably close to the balanced 50% benchmark, demonstrating effective game balance by the developers. The median of 49.81% and mode of 50.00% reinforce this balance. However, the standard deviation of 6.68% indicates performance variation, with some heroes achieving 57.86% win rates while others struggle near 0% in competitive play. This variation reflects differences in mechanical difficulty, meta relevance, and team composition synergy.

### Data Visualizations

#### Role-Based HP Analysis
The visualization clearly demonstrates the HP hierarchy across roles:
- **Tank**: ~2709 (highest average HP)
- **Fighter**: ~2700
- **Assassin**: ~2548
- **Mage**: ~2520
- **Marksman**: ~2500
- **Support**: ~2470 (lowest average HP)

Tanks possess the highest average HP, followed closely by Fighters. Mages, Marksmen, and Supports cluster together at the lower end, reflecting their role as backline damage dealers and utility providers requiring team protection.

#### Distribution of Heroes by Role
The hero roster distribution reflects design philosophy prioritizing diverse playstyles:
- **Fighter**: ~32% (largest portion, reflecting versatility)
- **Mage**: ~25% 
- **Assassin**: ~14%
- **Tank**: ~13%
- **Marksman**: ~12%
- **Support**: ~9%

Fighters comprise the largest portion of the hero roster, reflecting their versatility and popularity in solo queue gameplay. This distribution emphasizes flexible roles and diverse gameplay options.

#### Movement Speed Distribution by Role
Movement speed analysis reveals strategic balance:
- **Assassins**: Highest median at 260, minimal variance (mobility-focused design)
- **Fighters**: 257 average (balanced mobility)
- **Tanks**: 253 average (moderate speed despite bulk)
- **Supports**: 248 average
- **Mages**: 244 average (lowest, backline positioning)
- **Marksmen**: 244 average (requires protection)

This distribution validates role design philosophy where mobility compensates for durability differences.

#### HP vs Movement Speed Relationship
The scatter plot reveals a general inverse correlation between HP and movement speed. Heroes with higher HP (Tanks, Fighters) tend to have moderate movement speeds, while fragile heroes (Assassins, some Mages) compensate with higher mobility. This design pattern maintains game balance by preventing heroes from possessing both maximum durability and maximum mobility simultaneously.

#### Top 10 Heroes by Win Rate

1. **Faramis** (Support) - 57.86%
2. **Franco** (Tank) - 57.42%
3. **Kadita** (Mage) - 57.23%
4. **Wanwan** (Marksman) - 56.97%
5. **Miya** (Marksman) - 56.25%
6. **Vexana** (Mage) - 55.56%
7. **Lolita** (Support) - 53.81%
8. **Eudora** (Mage) - 53.79%
9. **Yi Sun-Shin** (Assassin) - 53.63%
10. **Yin** (Fighter) - 53.61%

The top performers represent diverse roles, indicating that win rate is determined more by hero kit effectiveness, meta relevance, and team synergy rather than raw statistical advantages. The diversity across roles (Support, Tank, Mage, Marksman, Assassin, Fighter) demonstrates successful game balance.

#### Win Rate Distribution
The distribution reveals a roughly normal distribution centered around 50%, with most heroes clustering between 45-52% win rate. This demonstrates successful game balance, with outliers on both ends representing either:
- **Overperforming heroes**: Requiring potential adjustments (>53%)
- **Underperforming heroes**: Either mechanically demanding with high skill floors or requiring buffs (<45%)

The concentration around 50% validates the competitive viability of the majority of the hero roster, allowing for diverse team compositions and strategic flexibility.

---

### Key Findings

1. **Balanced Design**: Average win rate of 49.49% demonstrates excellent game balance
2. **Role Differentiation**: Clear statistical patterns distinguish roles (HP, movement speed)
3. **Strategic Diversity**: 114 heroes provide extensive strategic options
4. **Competitive Viability**: Multiple heroes across all roles achieve high win rates
5. **Design Trade-offs**: Inverse HP-mobility relationship maintains balance

**Interactive Analysis**: View the complete interactive analysis at https://github.com/lilyofthevaleys/ml-hero-analysis

---

*Analysis conducted January 2026*  
*Dataset: 114 Mobile Legends: Bang Bang Heroes*
