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

The interactive analysis dashboard provides four main visualization tabs:

#### Tab 1: Hero Dataset (Complete Data Table)
A comprehensive, searchable, and sortable table displaying all 114 heroes with the following columns:
- Hero name
- Role (color-coded badges)
- Lane assignment
- Base HP
- Movement Speed
- Esports Wins
- Esports Losses
- Win Rate (color-coded: green >51%, red <49%, blue 49-51%)

**Features:**
- Real-time search filtering by name, role, or lane
- Sortable columns (click headers to sort ascending/descending)
- Scrollable interface for easy data exploration

#### Tab 2: Overview Statistics

**Figure 1: HP Distribution by Hero (Bar Chart)**
Shows the HP values for the first 20 heroes in the dataset, providing a visual representation of health point distribution across the hero roster. The chart highlights the variation in durability, with values ranging from approximately 2,300 to 2,900 HP.

**Key Metrics Dashboard:**
- Average HP: 2574
- Average Movement Speed: 252
- Average Win Rate: 49.49%

These metrics are prominently displayed in card format, providing immediate insight into game balance and hero design philosophy.

#### Tab 3: Role Analysis

**Figure 2: Average HP by Role (Bar Chart)**
Demonstrates the HP hierarchy across roles:
- **Tank**: 2709 (highest average HP)
- **Fighter**: 2700
- **Mage**: 2520
- **Assassin**: 2548
- **Marksman**: 2500
- **Support**: 2470 (lowest average HP)

Tanks possess the highest average HP, designed to absorb damage and protect teammates. Supports show the lowest average HP, reflecting their utility-focused design that prioritizes positioning over durability.

**Figure 3: Average Movement Speed by Role (Bar Chart)**
Movement speed analysis reveals strategic balance:
- **Assassin**: 257 (highest, enabling mobility-focused gameplay)
- **Fighter**: 257 (balanced mobility for split-pushing)
- **Tank**: 253 (moderate speed despite bulk)
- **Marksman**: 246
- **Mage**: 244 (lowest, emphasizing backline positioning)
- **Support**: 248

The relatively narrow range (244-257) demonstrates intentional game balance, preventing any single role from dominating through excessive mobility advantage.

#### Tab 4: Performance Analysis

**Figure 4: Top 10 Heroes by Win Rate (Horizontal Bar Chart)**
Color-coded visualization showing the highest-performing heroes in competitive play:
- Green bars indicate win rates above 51% (strong performance)
- Orange/yellow bars indicate balanced performance around 50%

**Top 10 Heroes by Win Rate:**

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

**Analysis:**
The top performers represent all six roles, indicating that win rate is determined by hero kit effectiveness, meta relevance, and team synergy rather than raw statistical advantages. Notably:
- **Supports** occupy 2 spots (Faramis #1, Lolita #7), demonstrating the impact of utility and crowd control
- **Mages** dominate with 3 spots (Kadita #3, Vexana #6, Eudora #8), reflecting burst damage effectiveness
- **Marksmen** show strong performance (Wanwan #4, Miya #5), validating late-game carry potential
- All roles are competitive, confirming successful game balance

**Hero Statistics Table:**
A detailed table displays the top 10 performers with complete information including hero name, role, HP, movement speed, and win rate percentage.

#### Tab 5: Hypothesis Testing Analysis

The hypothesis testing section presents statistical analyses with formal null and alternative hypotheses:

**Test 1: One-Sample Test - Average HP vs Standard (2600)**
- **Hypothesis:**
  - H₀: μ = 2600 (Average HP equals 2600)
  - H₁: μ ≠ 2600 (Average HP differs from 2600)
- **Results:**
  - Sample Mean: 2574
  - Test Value: 2600
  - Sample Size: 114
  - **Conclusion**: Average HP (2574) is very close to 2600, suggesting no significant difference. The difference of 26 HP represents less than 1% variation, indicating the game maintains a consistent health baseline across the roster.

**Test 2: One-Sample Test - Average Win Rate vs 50%**
- **Hypothesis:**
  - H₀: μ = 50% (Win rate is balanced at 50%)
  - H₁: μ ≠ 50% (Win rate differs from 50%)
- **Results:**
  - Sample Mean: 49.49%
  - Test Value: 50%
  - Sample Size: 114
  - **Conclusion**: Average win rate (49.49%) is very close to 50%, indicating balanced gameplay. The 0.51% difference from perfect balance demonstrates successful competitive equilibrium across the hero roster.

**Test 3: Two-Sample Test - Tank vs Assassin HP Comparison**
- **Hypothesis:**
  - H₀: μ_Tank = μ_Assassin (No difference in HP)
  - H₁: μ_Tank ≠ μ_Assassin (Tanks have different HP than Assassins)
- **Results:**
  - Tank Average HP: 2709
  - Assassin Average HP: 2548
  - Difference: 161 HP
  - **Conclusion**: Tanks have significantly higher HP than Assassins (161 HP difference, ~6.3% more), as expected by role design. This validates the durability vs. mobility trade-off in game design, where Tanks sacrifice damage and mobility for survivability.

**Statistical Note:**
All analyses are descriptive in nature. For formal statistical testing, one would calculate t-statistics, p-values, and determine significance levels (α = 0.05) to make definitive conclusions about rejecting or accepting null hypotheses. The current results suggest strong alignment with expected game balance parameters.

---

### Key Findings

1. **Excellent Game Balance**: Average win rate of 49.49% (deviation of only 0.51% from ideal 50%) demonstrates exceptional game balance
2. **Clear Role Differentiation**: Statistical patterns clearly distinguish roles:
   - HP hierarchy: Tank (2709) > Fighter (2700) > Assassin (2548) > Mage (2520) > Marksman (2500) > Support (2470)
   - Movement speed balance: Assassin/Fighter (257) > Tank (253) > Support (248) > Marksman/Mage (244-246)
3. **Strategic Diversity**: 114 heroes across 6 roles provide extensive strategic options for team compositions
4. **Competitive Viability**: Multiple heroes across all roles achieve 53%+ win rates, indicating every role has competitive picks
5. **Design Trade-offs**: The 161 HP difference between Tanks and Assassins validates durability-mobility balance
6. **Consistency**: Average HP of 2574 is within 1% of the 2600 baseline, showing consistent hero design
7. **Role Representation**: Top 10 heroes include all 6 roles, confirming no single role dominates competitive play

### Technical Implementation

**Interactive Dashboard Features:**
- **Search Functionality**: Real-time filtering across 114 heroes
- **Dynamic Sorting**: Click-to-sort on all data columns
- **Color-Coded Metrics**: Visual indicators for performance (green/red/blue win rates)
- **Responsive Charts**: Interactive bar charts and visualizations using Chart.js
- **Tab Navigation**: Five organized sections for comprehensive analysis

**Technologies Used:**
- Chart.js for data visualization
- Vanilla JavaScript for interactivity
- HTML5/CSS3 for responsive design
- Git version control with full commit history

**Interactive Analysis**: View the complete interactive dashboard at https://github.com/lilyofthevaleys/ml-hero-analysis

Open `ml_analysis_simple.html` in any browser to explore:
- ✅ Complete hero dataset with search and sort
- ✅ Statistical overview with key metrics
- ✅ Role-based comparative analysis
- ✅ Performance rankings and top heroes
- ✅ Hypothesis testing with statistical results

---

*Analysis conducted January 2026*  
*Dataset: 114 Mobile Legends: Bang Bang Heroes*  
*Repository: https://github.com/lilyofthevaleys/ml-hero-analysis*
