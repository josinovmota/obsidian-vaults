2024-11-01 09:46

Tags:[[Data Science]], [[Step-By-Step]], [[Modelling]]

# Data Preparation

### 1. **Understand the Data**

- **Goal**: Familiarize yourself with the dataset to understand its structure, variable meanings, and distribution.
- **Actions**:
    - Load the data and inspect it.
    - Examine data types, variable meanings, and distributions.
    - Check for potential issues, like missing or inconsistent values.

### 2. **Data Cleaning**

- **Goal**: Handle inconsistencies, errors, and irrelevant data points.
- **Actions**:
    - **Handle Missing Data**: Remove rows/columns with excessive missing values or impute (fill) missing values based on context (e.g., using mean, median, or predictive models).
    - **Remove Duplicates**: Remove any duplicate rows if they are not meaningful.
    - **Fix Outliers**: Handle outliers by capping, transforming, or removing them if they’re errors, depending on their impact on the model.
    - **Standardize Formats**: Standardize date, text, and categorical formats for consistency.

### 3. **Data Transformation and Encoding**

- **Goal**: Transform data into a format suitable for the model.
- **Actions**:
    - **Encoding Categorical Variables**: Convert categorical variables into numeric format, often using one-hot encoding, label encoding, or other encoding techniques.
    - **Scaling and Normalization**: Apply feature scaling (such as standardization or normalization) to ensure features are on similar scales, especially for algorithms sensitive to feature magnitudes (e.g., k-NN, SVM).
    - **Log Transformation**: Use log transformation for skewed data to make distributions closer to normal.

### 4. **Feature Engineering**

- **Goal**: Create new features or modify existing ones to improve model performance.
- **Actions**:
    - **Feature Creation**: Generate new features from existing ones (e.g., extracting month and year from a date).
    - **Feature Transformation**: Combine or modify features to capture relationships (e.g., ratios, differences).
    - **Polynomial Features**: Use polynomial terms for linear models to capture nonlinear relationships.

### 5. **Feature Selection**

- **Goal**: Identify and select only the most relevant features to reduce dimensionality, which can improve performance and reduce computation time.
- **Actions**:
    - **Correlation Analysis**: Identify features with strong correlations to the target and weak correlations to each other.
    - **Feature Importance**: Use algorithms that rank feature importance (e.g., random forests, LASSO) to select impactful features.
    - **Dimensionality Reduction**: Apply techniques like PCA or LDA to reduce feature space while retaining variance.

### 6. **Splitting the Data**

- **Goal**: Split data into training, validation, and test sets to evaluate model performance reliably.
- **Actions**:
    - **Train-Test Split**: Divide data into training and test sets (often 70–80% for training and 20–30% for testing).
    - **Validation Set**: Optionally split further to create a validation set for hyperparameter tuning or use cross-validation.
    - **Stratified Splits**: For classification problems, use stratified sampling to maintain class balance across splits.

### 7. **Data Augmentation (if applicable)**

- **Goal**: Increase data size, especially in image or text data, to improve model robustness.
- **Actions**:
    - **Image Augmentation**: Rotate, crop, flip, or adjust brightness in images.
    - **Text Augmentation**: Synonym replacement, random insertion, or back translation for text data.
    - **Oversampling or Undersampling**: Adjust class imbalances by oversampling minority classes or undersampling majority classes.

### 8. **Data Sampling (if needed)**

- **Goal**: Adjust dataset size to fit computation constraints or handle class imbalances.
- **Actions**:
    - **Downsampling**: Use a smaller, representative sample if the dataset is very large.
    - **Oversampling/Undersampling for Class Imbalance**: Apply techniques like SMOTE to balance classes in classification tasks.

### 9. **Data Preprocessing Validation**

- **Goal**: Verify that data preprocessing steps have improved data quality and model-readiness.
- **Actions**:
    - Check distributions, missing values, and data consistency post-preprocessing.
    - Visualize features to confirm transformations have achieved the desired effects.

### Summary of Steps:

1. **Understand the Data**
2. **Data Cleaning**
3. **Data Transformation and Encoding**
4. **Feature Engineering**
5. **Feature Selection**
6. **Splitting the Data**
7. **Data Augmentation (if applicable)**
8. **Data Sampling (if needed)**
9. **Data Preprocessing Validation**

This structured approach ensures the data is clean, representative, and suitable for model training, leading to better model performance and reliability.

# Meaning

Estou eu, no meu primeiro dia de estágio, felizão e eis que me deparo com um projeto. O projeto diz que a minha equipe deve usar uma [[Linear Regression]] para prever o preço de casas. E agora, por onde começar? É aí que mora a preparação dos dados. Primeiro precisamos olhar os dados, entendê-los, ter os primeiros insights. Depois devemos limpá-los, ou seja, remover nan-values ou problemas como [[Outliers]] atrapalhando medidas, etc. Após isso, vale ver se os dados estão todos em seus tipos certos, ou seja, se os int64 realmente precisam ser int64 ou se podemos mudar para int16. E é só depois disso que começamos a pensar em criar o nosso modelo. Agora buscamos as melhores features(predictors), dividimos os dados em treino e teste, e só então começamos a procurar/aplicar um Modelo de Machine Learning que se adeque ao projeto
# References

Chat gpt