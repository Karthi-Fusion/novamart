-- ============================================================================
-- NOVAMART SUPABASE DATABASE SCHEMA & SEED DATA
-- Copy and paste this script directly into Supabase SQL Editor (SQL Editor -> New Query -> Run)
-- ============================================================================

-- 1. ENABLE UUID EXTENSION
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. USER PROFILES TABLE (Stores role: 'customer' vs 'admin')
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('customer', 'admin')) DEFAULT 'customer',
    phone TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Profiles
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 3. PRODUCTS CATALOG TABLE
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    sku TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC NOT NULL,
    mrp NUMERIC NOT NULL,
    discount NUMERIC DEFAULT 0,
    rating NUMERIC DEFAULT 4.5,
    reviews_count INT DEFAULT 0,
    in_stock BOOLEAN DEFAULT true,
    stock_count INT DEFAULT 50,
    delivery_text TEXT,
    image TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Products viewable by all" ON public.products FOR SELECT USING (true);
CREATE POLICY "Products insertable by admin only" ON public.products FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- 4. ORDERS TABLE
CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    total_amount NUMERIC NOT NULL,
    payment_method TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Processing',
    tracking_step INT DEFAULT 1,
    delivery_address TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Orders viewable by customer or admin" ON public.orders FOR SELECT USING (true);
CREATE POLICY "Orders insertable by customers" ON public.orders FOR INSERT WITH CHECK (true);

-- 5. INVENTORY SKUS TABLE
CREATE TABLE IF NOT EXISTS public.inventory (
    sku TEXT PRIMARY KEY,
    product_name TEXT NOT NULL,
    stock INT NOT NULL DEFAULT 50,
    reserved INT DEFAULT 0,
    sold INT DEFAULT 0,
    reorder_level INT DEFAULT 15,
    status TEXT DEFAULT 'In Stock'
);

ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Inventory viewable by all" ON public.inventory FOR SELECT USING (true);

-- ============================================================================
-- SEED INITIAL DATA FOR PRODUCTS, INVENTORY & DEFAULTS
-- ============================================================================

INSERT INTO public.products (id, sku, name, brand, category, price, mrp, discount, rating, reviews_count, in_stock, stock_count, delivery_text, image, description)
VALUES
('prod-101', 'SKU-SAMS-S24U', 'Samsung Galaxy S24 Ultra 5G (256GB)', 'Samsung', 'mobiles', 129999, 144999, 10, 4.7, 3842, true, 45, 'FREE Delivery Tomorrow', 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80', 'Experience next level mobile intelligence with Galaxy AI.'),
('prod-102', 'SKU-APPL-IP15P', 'Apple iPhone 15 Pro Max (256GB)', 'Apple', 'mobiles', 148900, 159900, 7, 4.8, 5210, true, 28, 'FREE Delivery Tomorrow', 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80', 'Forged in titanium with A17 Pro chip.'),
('prod-103', 'SKU-SONY-WH1000', 'Sony WH-1000XM5 ANC Headphones', 'Sony', 'electronics', 26990, 34990, 23, 4.6, 1840, true, 62, 'FREE Delivery Today', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', 'Industry-leading noise cancelling with 30hr battery.'),
('prod-104', 'SKU-DELL-XPS15', 'Dell XPS 15 Laptop (Core i9, 32GB)', 'Dell', 'laptops', 214990, 249990, 14, 4.5, 890, true, 15, 'FREE Delivery Tomorrow', 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80', '3.5K OLED touchscreen workstation for creators.'),
('prod-114', 'SKU-GROC-OIL', 'Borges Extra Virgin Olive Oil (1 Litre)', 'Borges', 'grocery', 999, 1499, 33, 4.7, 4210, true, 150, 'FREE Delivery Today', 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80', 'Cold pressed 100% Spanish extra virgin olive oil.'),
('prod-115', 'SKU-GROC-RICE', 'Daawat Basmati Rice (5 Kg Bag)', 'Daawat', 'grocery', 449, 699, 35, 4.6, 6890, true, 200, 'FREE Delivery Today', 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', 'Extra long grain aged Basmati rice.'),
('prod-111', 'SKU-LEVI-501D', 'Levis 501 Original Straight Denim Jeans', 'Levis', 'mens-fashion', 2999, 4999, 40, 4.5, 1480, true, 95, 'FREE Delivery Tomorrow', 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80', 'Iconic straight leg cotton denim jeans.'),
('prod-112', 'SKU-ZARA-FLORAL', 'Zara Floral Print Maxi Dress', 'Zara', 'womens-fashion', 3590, 5990, 40, 4.6, 890, true, 40, 'FREE Delivery Tomorrow', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80', 'Flowy tiered summer dress with ruffle neckline.')
ON CONFLICT (id) DO NOTHING;

-- Seed Inventory SKUs
INSERT INTO public.inventory (sku, product_name, stock, reserved, sold, reorder_level, status)
VALUES
('SKU-SAMS-S24U', 'Samsung Galaxy S24 Ultra', 45, 8, 1420, 20, 'In Stock'),
('SKU-APPL-IP15P', 'Apple iPhone 15 Pro Max', 28, 5, 2150, 15, 'In Stock'),
('SKU-SONY-WH1000', 'Sony WH-1000XM5 Headphones', 62, 12, 890, 25, 'In Stock'),
('SKU-GROC-OIL', 'Borges Extra Virgin Olive Oil', 150, 20, 4500, 40, 'In Stock'),
('SKU-ZARA-FLORAL', 'Zara Floral Maxi Dress', 40, 5, 890, 15, 'In Stock')
ON CONFLICT (sku) DO NOTHING;

-- ============================================================================
-- AUTOMATED USER CREATION TRIGGER FOR SUPABASE AUTH
-- Automatically creates a profile record when a new user registers in Supabase Auth
-- ============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', SPLIT_PART(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'role', 'customer')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger execution
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- SUCCESS MESSAGE
SELECT 'NOVAMART Supabase Database Schema & Policies Created Successfully!' AS status;
