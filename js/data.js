/* Medawa · shared data and state (products, categories, articles, cart, wishlist, orders, user) */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const K=n=>'KES '+Math.round(n).toLocaleString('en-KE');
const store={get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v===null||v===undefined?d:v}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* name, icon, hue (used for the product tile tint) */
const CATS=[
 {name:'Medicines',icon:'pill',hue:168},{name:'Supplements',icon:'leaf',hue:110},
 {name:'Skin Care',icon:'drop',hue:330},{name:'Baby & Mum',icon:'smile',hue:20},
 {name:'Personal Care',icon:'sparkle',hue:280},{name:'First Aid',icon:'plus',hue:5},
 {name:'Devices',icon:'pulse',hue:210},{name:'Cold & Flu',icon:'thermo',hue:45},
 {name:'Sexual Health',icon:'heart',hue:345}];
const CAT=n=>CATS.find(c=>c.name===n)||CATS[0];

/* id, name, category, price, old price, stock, rating, reviews, emoji, requires prescription */
const P=[
[1,'Panadol Baby & Infant Suspension 60ml','Medicines',306,0,40,4.8,212,'🍼'],
[2,'Maalox Stick Sachets 20’s','Medicines',1080,0,25,4.5,64,'💊'],
[3,'Anthelios UV Sunscreen SPF50 50ml','Skin Care',3200,3900,12,4.9,148,'☀️'],
[4,'Foaming Facial Cleanser 236ml','Skin Care',2400,0,18,4.7,301,'🧴'],
[5,'Bio-Oil Scar & Stretch Mark 200ml','Skin Care',1940,2300,30,4.6,420,'🧴'],
[6,'Baby Pants Jumbo Size 4 (56’s)','Baby & Mum',1293,1795,22,4.7,188,'👶'],
[7,'Baby Diapers Jumbo Size 3 (62’s)','Baby & Mum',1200,1499,0,4.6,97,'👶'],
[8,'Omega 3 Fish Oil 1000mg 30’s','Supplements',999,0,80,4.6,76,'🐟'],
[9,'Vitamin C 1000mg Effervescent 20’s','Supplements',700,0,64,4.5,133,'🍊'],
[10,'Vitamin D3 60,000 IU 4’s','Supplements',610,677,50,4.8,89,'☀️'],
[11,'Probiotic Capsules 10’s','Supplements',1457,0,9,4.4,41,'🌱'],
[12,'Restoring Body Lotion 400ml','Personal Care',805,0,35,4.5,58,'🧴'],
[13,'Fresh Active Deodorant Spray','Personal Care',769,0,44,4.3,36,'🧼'],
[14,'Digital Blood Pressure Monitor','Devices',5000,6200,6,4.8,112,'🩺'],
[15,'Glucose Meter Starter Kit','Devices',2153,0,14,4.7,95,'🩸'],
[16,'Infrared Forehead Thermometer','Devices',1800,2400,20,4.6,60,'🌡️'],
[17,'Emergency Contraceptive 2’s','Sexual Health',208,0,70,4.5,52,'💗'],
[18,'Cold & Flu Syrup 100ml','Cold & Flu',853,0,38,4.4,70,'🤧'],
[19,'Throat Lozenges Honey & Lemon 24’s','Cold & Flu',380,0,90,4.6,104,'🍯'],
[20,'Pulse Oximeter Fingertip','Devices',2600,3200,16,4.7,83,'🫀'],
[21,'Amoxicillin 500mg Capsules 21’s','Medicines',450,0,40,4.6,38,'💊',1],
[22,'Amlodipine 5mg Tablets 30’s','Medicines',380,0,60,4.7,54,'💊',1],
[23,'Metformin 500mg Tablets 60’s','Medicines',320,0,55,4.6,47,'💊',1],
[24,'Assorted Fabric Plasters 40’s','First Aid',250,0,120,4.6,92,'🩹'],
[25,'Antiseptic Solution 250ml','First Aid',420,520,70,4.7,66,'🧪'],
[26,'Family First-Aid Kit (60 pieces)','First Aid',2400,2900,18,4.8,71,'🧰']
].map(a=>({id:a[0],n:a[1],c:a[2],p:a[3],o:a[4],s:a[5],r:a[6],rv:a[7],e:a[8],rx:!!a[9]}));
const PID=id=>P.find(x=>x.id==id);

/* id, title, tag, emoji, hue, body */
const ARTICLES=[
[1,'5 habits for healthier blood pressure','Heart health','🫀',350,'Cut back on salt, stay active, sleep well and limit alcohol. Have your pressure checked regularly and speak to a pharmacist about home monitors.'],
[2,'Managing diabetes day to day','Diabetes','🩸',210,'Track your glucose, take medicines as prescribed, choose slow-release carbohydrates and keep up with regular reviews.'],
[3,'Sun protection for every skin tone','Skin care','☀️',40,'Apply SPF 30 or higher every morning and reapply every two hours outdoors. Everyone needs sun protection.'],
[4,'Baby’s first-aid kit essentials','Baby & Mum','🍼',20,'Keep a digital thermometer, infant paracetamol, saline drops, plasters and your paediatrician’s number to hand.'],
[5,'Do you really need vitamins?','Wellness','🌿',130,'A balanced diet covers most needs. Supplements help with confirmed deficiencies, so ask your pharmacist first.'],
[6,'Cold or flu? How to tell','Cold & Flu','🤧',190,'Flu comes on fast with fever and body aches; colds build slowly. Rest, fluids and symptom relief help. See a doctor if it worsens.']
].map(a=>({id:a[0],t:a[1],tag:a[2],e:a[3],h:a[4],b:a[5]}));

/* ---- state (persisted in localStorage) ---- */
const S={
 cart:store.get('mc',{}),wish:store.get('mw',[]),orders:store.get('mo',[]),user:store.get('mu',null),promo:store.get('mp',0),
 save(){store.set('mc',this.cart);store.set('mw',this.wish);store.set('mo',this.orders);store.set('mu',this.user);store.set('mp',this.promo)},
 count(){return Object.values(this.cart).reduce((a,b)=>a+b,0)},
 subtotal(){return Object.keys(this.cart).reduce((s,i)=>{const p=PID(i);return s+(p?p.p*this.cart[i]:0)},0)},
 hasRx(){return Object.keys(this.cart).some(i=>PID(i)&&PID(i).rx)},
 shipping(t){return !t||t>=2500?0:250}
};
/* drop any cart lines for products that no longer exist */
Object.keys(S.cart).forEach(i=>{if(!PID(i))delete S.cart[i]});

/* Optional product photos (Unsplash). If a photo cannot load, the emoji tile underneath is shown. */
const ph=(id,w)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w||600}&q=70`;
const IMG={
 'Medicines':['1584308666744-24d5c474f2ae','1471864190281-a93a3070b6de','1550572017-edd951b55104'],
 'Skin Care':['1556228578-0d85b1a4d571','1620916566398-39f1143ab7be','1556228720-195a672e8a03'],
 'Baby & Mum':['1515488042361-ee00e0ddd4e4','1519689680058-324335c77eba','1522771930-78848d9293e8'],
 'Supplements':['1607619056574-7b8d3ee536b2','1584017911766-d451b3d0e843','1550572017-edd951b55104'],
 'Personal Care':['1556228720-195a672e8a03','1607006333439-1d6a6cf9a5d8','1556228578-0d85b1a4d571'],
 'Devices':['1584515933487-779824d29309','1576091160399-112ba8d25d1d','1559757148-5c350d0d3c56'],
 'Sexual Health':['1584308666744-24d5c474f2ae','1471864190281-a93a3070b6de','1550572017-edd951b55104'],
 'Cold & Flu':['1471864190281-a93a3070b6de','1584308666744-24d5c474f2ae','1631549916768-4119b2e5f926'],
 'First Aid':['1603398938378-e54eab446dde','1584515933487-779824d29309','1631549916768-4119b2e5f926']};
