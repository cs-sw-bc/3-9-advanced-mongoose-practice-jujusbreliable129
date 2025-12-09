# **Assignment: Hospital Patient Record System (Regex + Mongoose Data Modeling)**

### Steps to get started
1. Initialize NPM
  ```
  npm init -y
  ```
2. install packages
 ```
 npm install mongoose
 ```
3. Add/Change "type":"module" in package.json
4. Create your app.js and start working!

   
This assignment focuses on applying **regex validation**, **embedding**, **referencing**, and **querying** within a realistic hospital record-keeping scenario. All work should be done using the concepts practiced in class.

---

# 🏥 **Scenario Overview**

You are building a simplified **Hospital Patient Record System** for an internal medical database. The system stores information about:

* Doctors
* Patients
* Visits

Your task is to design schemas, apply regex validation rules, and run queries that reflect real hospital workflow.

---

# 🧑‍⚕️ **1. Doctor Catalog (Referenced Data)**

Doctors work across many patients, so they should be modeled as **referenced documents**.

### **Doctor data must include:**

* A unique doctor ID that follows a specific pattern
* A doctor name with alphabet-only rules
* A phone number validated with regex
* A specialization selected from a fixed list
* An email address validated using regex

Think carefully about:

* Why doctors should NOT be embedded inside patients
* What regex patterns are appropriate for IDs, emails, and phone numbers

---

# 🧍‍♀️ **2. Patient Catalog (Mixed Referencing + Embedding)**

Each patient must store core identity information and also be associated with exactly one primary doctor.

### **Patient data must include:**

* A patient ID that follows a pattern
* A patient name validated using regex
* Contact info such as phone and email
* A referenced doctor assignment
* A list of visits (embedded documents)

You must explain:

* Why embedding *visits* makes sense
* Why referencing a doctor makes sense
* What regex patterns ensure clean patient data

---

# 📝 **3. Visit Records (Embedded Inside Patient Documents)**

Each patient can have multiple medical visits. These visits must be modeled as **embedded documents**.

### **Each visit entry must contain:**

* A date in a specific required format
* A description of symptoms
* A diagnosis
* A reference to the doctor seen during the visit
* Optional notes such as prescription information

You must think about:

* Why a visit should NOT be a standalone collection
* What regex patterns are suitable for dates or simple text fields

---

# 🔍 **4. Required Queries**

After constructing your data model, write and run several queries in your script or MongoDB shell.

### You MUST write queries to:

1. **Find all patients assigned to a specific doctor**
2. **Search for patients whose diagnosis contains a specific keyword** (using regex)
3. **Find all visits on or after a certain date**
4. **Sort patients by age**
5. **Populate doctor information inside patient and visit records**
6. **Filter patients by phone/email patterns** (regex match)

Your queries should demonstrate:

* Filtering
* Sorting
* Regex searching
* Accessing embedded fields
* Populating referenced fields

---

# 🧠 **5. Written Component: Explain Your Decisions**

Provide a short write-up (1–2 paragraphs) answering:

* Why did you embed visits instead of referencing them?
* Why did you reference doctors instead of embedding them?
* What purpose did regex serve in your data design?
* Which regex patterns were the most challenging to design and why?

This explanation demonstrates your understanding of **data modeling**, **validation**, and **regex logic** — not just implementation.

---

# 🎯 **Learning Outcomes**

By completing this assignment you will:

* Practice designing schemas with both embedding & referencing
* Apply regex patterns to validate complex fields
* Write meaningful database queries using filters, regex, and populate
* Model real-world data flows found in hospital systems

This assignment reinforces everything from the class, but YOU must decide the correct regex, schema structure, and queries based on your understanding.
