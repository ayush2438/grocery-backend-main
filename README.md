# 🛒 Grocery Store Management System (GSMS)

A full-stack web application to manage a grocery store’s operations — like adding products, placing orders, and viewing sales reports — built using **Python (Flask)**, **MySQL**, **HTML/CSS/JS**, and **Bootstrap**.

---

## 📸 Screenshots
<details>
<summary>🔽 Click to view</summary>

### 💻 UI - Manage Products  
<img src="https://github.com/user-attachments/assets/97cee621-ceaa-4276-ae22-69a0c4da134c" width="600"/>

### 🧾 UI - Place Order  
<img src="https://github.com/user-attachments/assets/b7f3152e-9f71-4587-b0f0-bd837de81157" width="600"/>

### 📊 UI - Dashboard  
<img src="https://github.com/user-attachments/assets/a890dfab-b9dc-4715-9808-90e90b7fed31" width="600"/>

### 🗃️ MySQL Database View  
<img src="https://github.com/user-attachments/assets/c35d0fb3-ddf4-44aa-a659-51a408bee4af" width="600"/>

</details>

---

## 🧠 Features

- ✅ Add and delete grocery products
- ✅ Set price and unit (e.g. kg, litre)
- ✅ Create customer orders
- ✅ Real-time total price calculation
- ✅ Store and retrieve orders from MySQL
- ✅ Login/logout with localStorage
- ✅ Fully responsive UI (Bootstrap)

---

## 🛠️ Tech Stack

| Layer       | Technology                   |
|-------------|------------------------------|
| Backend     | Python (Flask)               |
| Frontend    | HTML, CSS, JavaScript        |
| UI Framework| Bootstrap 4                  |
| Database    | MySQL                        |
| Tools       | MySQL Workbench, Git, GitHub |
| Deployment  | Localhost (dev mode)         |

---

## 📁 Folder Structure

![image](https://github.com/user-attachments/assets/71673aef-2230-49dd-9da9-cc8f1f07cea9)


---

## 🚀 Setup Instructions

### 🔧 Backend (Flask)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayush2438/grocery-backend-main.git
   cd grocery-backend-main

2.Create virtual environment:
python3 -m venv .venv
source .venv/bin/activate

3.Install dependencies:
pip install -r requirements.txt

4.Start Flask server:
python app.py
The server will start at: http://127.0.0.1:5000

🌐 Frontend
1.Navigate to ui/index.html

2.Open it in your browser (double-click or use VS Code Live Server)

3.Login via login.html form (no password validation used currently)

🗄️ MySQL Setup
1.Open MySQL Workbench

2.RUN
CREATE DATABASE grocery_store;

3.Create/import the following tables: products, orders, order_details, uom

4.Make sure sql_connection.py has your correct DB credentials



🔐 Login Credentials
Currently handled on frontend using localStorage.
⚠️ No authentication — for demo only.

👨‍💻 Author
Ayush Tomar
🎓 B.Tech CSE Student
📍 Gwalior, India
🔗 GitHub Profile

📦 Future Improvements
🔒 Add real authentication & JWT

🌐 Deploy backend to Render / frontend to Netlify

📊 Add analytics dashboard

🛍️ Add product categories & search

📱 Fully mobile-first layout




