# 🛒 Grocery Store Management System (GSMS)

A full-stack web application to manage a grocery store’s operations like adding products, placing orders, and viewing sales reports — built using **Python (Flask)**, **MySQL**, **HTML/CSS/JS**, and **Bootstrap**.

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/a710f548-3f4c-4920-a13e-be8516eb3093)


<details>
<summary>🔽 Click to view</summary>

### 💻 UI - Manage Products  
<img src="![image](https://github.com/user-attachments/assets/97cee621-ceaa-4276-ae22-69a0c4da134c)
" width="600"/>

### 🧾 UI - Place Order  
<img src="![image](https://github.com/user-attachments/assets/b7f3152e-9f71-4587-b0f0-bd837de81157)
" width="600"/>

### 📊 UI - Dashboard  
<img src="![image](https://github.com/user-attachments/assets/a890dfab-b9dc-4715-9808-90e90b7fed31)
" width="600"/>

### 🗃️ MySQL Database View  
<img src="![image](https://github.com/user-attachments/assets/c35d0fb3-ddf4-44aa-a659-51a408bee4af)
" width="600"/>

</details>

---

## 🧠 Features

- ✅ Add and delete grocery products
- ✅ Set price and unit of measurement (e.g. kg, litre)
- ✅ Create new customer orders
- ✅ Calculate total cost in real-time
- ✅ Store and retrieve order history from MySQL
- ✅ Login/logout using local storage
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
| Deployment  | Localhost (can be hosted)    |

---

## 📁 Folder Structure

grocery-backend-main/
│
├── app.py # Flask app entry point
├── requirements.txt # Python dependencies
├── runtime.txt # Python version for deploy
├── sql_connection.py # MySQL connection setup
├── *.py # DAO scripts (product/order handling)
│
├── ui/ # Frontend files
│ ├── index.html
│ ├── login.html
│ ├── manage-product.html
│ ├── order.html
│ ├── js/
│ │ ├── custom/
│ │ │ ├── common.js
│ │ │ ├── dashboard.js
│ │ │ ├── order.js
│ │ │ ├── manage-product.js
│ ├── css/ # Bootstrap, style.css, custom.css
│ └── screenshots/ # UI & DB screenshots (optional)



---

## 🚀 Setup Instructions

### 🔧 Backend (Flask)

1. Clone the repository:
   ```bash
   git clone https://github.com/ayush2438/grocery-backend-main.git
   cd grocery-backend-main

Create a virtual environment:

python3 -m venv .venv
source .venv/bin/activate
Install dependencies:


pip install -r requirements.txt
Start the Flask server:

python app.py
Flask server will run at http://127.0.0.1:5000/

🌐 Frontend
Navigate to ui/index.html

Open it in a browser (double-click or use VS Code Live Server)

First login using the login.html form

🗄️ MySQL Setup
Start MySQL Workbench

Create a new database:

CREATE DATABASE grocery_store;
Import the products, orders, order_details, uom tables from your local .sql file or manually create via Workbench.

Update your credentials in sql_connection.py if needed.

🔐 Login Credentials
Currently handled using localStorage in login.html.
Backend accepts any hardcoded test credentials. (Can be extended)

✍️ Author
Ayush Tomar
👨‍💻 B.Tech CSE Student
📍 Gwalior, India
🔗 GitHub Profile

📦 Future Improvements
🔒 Secure login with proper authentication

🌐 Deploy to Render/Heroku + Netlify for frontend

🚶🏻

📈 Add analytics dashboard

🛍️ Add product categories and search filter

📱 Make it mobile-first fully

