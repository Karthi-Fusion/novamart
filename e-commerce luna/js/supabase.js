/**
 * NOVAMART - Supabase Database & Auth Integration
 * Reads credentials from window.NOVAMART_ENV (js/env.js) or fallback constants.
 */

// 1. CONFIGURE YOUR SUPABASE CREDENTIALS IN js/env.js OR BELOW:
const SUPABASE_URL = (window.NOVAMART_ENV && window.NOVAMART_ENV.SUPABASE_URL !== "https://your-project-id.supabase.co")
  ? window.NOVAMART_ENV.SUPABASE_URL
  : "YOUR_SUPABASE_PROJECT_URL";

const SUPABASE_ANON_KEY = (window.NOVAMART_ENV && window.NOVAMART_ENV.SUPABASE_ANON_KEY !== "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
  ? window.NOVAMART_ENV.SUPABASE_ANON_KEY
  : "YOUR_SUPABASE_ANON_KEY";

let supabaseClient = null;

// Initialize Supabase Client if valid credentials are provided
try {
  if (typeof supabase !== 'undefined' && SUPABASE_URL !== "YOUR_SUPABASE_PROJECT_URL" && SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY") {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("⚡ Supabase Client initialized successfully!");
  } else {
    console.log("ℹ️ Supabase credentials pending in js/env.js. Running with built-in state engine.");
  }
} catch (e) {
  console.warn("Supabase init note:", e.message);
}

/**
 * CUSTOMER LOGIN via Supabase / Local Fallback
 * Dedicated email login for Customer Store
 */
async function loginCustomer(email, password) {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) throw error;
      
      // Fetch user profile role
      const { data: profile } = await supabaseClient.from('profiles').select('role').eq('id', data.user.id).single();
      if (profile && profile.role === 'admin') {
        throw new Error("Admin credentials detected. Please use the Admin Portal login.");
      }
      
      localStorage.setItem('nova_user', JSON.stringify({ email: data.user.email, role: 'customer' }));
      return { success: true, user: data.user, role: 'customer' };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  // Fallback local auth simulation
  if (email.toLowerCase() === 'karthick@novamart.io' || email.includes('@')) {
    if (email.toLowerCase().includes('admin')) {
      return { success: false, error: "This email belongs to Admin. Please use Admin Portal login." };
    }
    const userObj = { email, role: 'customer' };
    localStorage.setItem('nova_user', JSON.stringify(userObj));
    return { success: true, user: userObj, role: 'customer' };
  }
  return { success: false, error: "Invalid customer credentials." };
}

/**
 * ADMIN LOGIN via Supabase / Local Fallback
 * Dedicated email login for Admin & Infrastructure Platform
 */
async function loginAdmin(email, password) {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) throw error;

      // Verify admin role in profile table
      const { data: profile } = await supabaseClient.from('profiles').select('role').eq('id', data.user.id).single();
      if (!profile || profile.role !== 'admin') {
        throw new Error("Access Denied: This account does not have Admin privileges.");
      }

      localStorage.setItem('nova_user', JSON.stringify({ email: data.user.email, role: 'admin' }));
      return { success: true, user: data.user, role: 'admin' };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  // Fallback local auth simulation for Admin
  if (email.toLowerCase() === 'admin@novamart.io' || password === 'admin123' || email.toLowerCase().includes('admin')) {
    const adminObj = { email: 'admin@novamart.io', role: 'admin' };
    localStorage.setItem('nova_user', JSON.stringify(adminObj));
    return { success: true, user: adminObj, role: 'admin' };
  }
  return { success: false, error: "Invalid admin credentials. Use admin@novamart.io" };
}

/**
 * Fetch Products from Supabase DB or Fallback
 */
async function fetchSupabaseProducts() {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient.from('products').select('*');
      if (!error && data && data.length > 0) return data;
    } catch (e) {
      console.log("Falling back to local product data.");
    }
  }
  return NOVAMART_DATA.products;
}

window.novaSupabase = {
  client: supabaseClient,
  loginCustomer,
  loginAdmin,
  fetchSupabaseProducts
};
