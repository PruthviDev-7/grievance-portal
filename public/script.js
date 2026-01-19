const API_URL = 'http://localhost:3000/api';

// --- LOGIN LOGIC ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const idNumber = document.getElementById('idInput').value;
        const password = document.getElementById('passwordInput').value;

        const res = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idNumber, password, role: 'citizen' })
        });
        
        const data = await res.json();
        if (data.success) {
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = 'dashboard.html';
        } else {
            alert('Login Failed');
        }
    });
}

// --- DASHBOARD LOGIC ---
async function loadDashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) window.location.href = 'index.html';

    document.getElementById('userName').innerText = user.name;

    const statsRes = await fetch(`${API_URL}/stats/${user._id}`);
    const stats = await statsRes.json();
    document.getElementById('statTotal').innerText = stats.total;
    document.getElementById('statPending').innerText = stats.pending;
    document.getElementById('statResolved').innerText = stats.resolved;

    const compRes = await fetch(`${API_URL}/complaints/${user._id}`);
    const complaints = await compRes.json();
    const list = document.getElementById('complaintsList');
    
    list.innerHTML = complaints.map(c => `
        <div class="complaint-item">
            <div>
                <h4>${c.title}</h4>
                <small>${c.category} | ${new Date(c.filedDate).toLocaleDateString()}</small>
            </div>
            <span class="status-badge status-${c.status}">${c.status}</span>
        </div>
    `).join('');
}

function showComplaintForm() { document.getElementById('complaintModal').classList.remove('hidden'); }
function hideComplaintForm() { document.getElementById('complaintModal').classList.add('hidden'); }

const newComplaintForm = document.getElementById('newComplaintForm');
if (newComplaintForm) {
    newComplaintForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        
        const complaintData = {
            citizenId: user._id,
            title: document.getElementById('cTitle').value,
            category: document.getElementById('cCategory').value,
            priority: document.getElementById('cPriority').value,
            status: 'Pending'
        };

        await fetch(`${API_URL}/complaints`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(complaintData)
        });

        hideComplaintForm();
        loadDashboard();
    });
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}
