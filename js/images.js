/* Unsplash photo IDs. Photos load from images.unsplash.com when online;
   if one fails to load, the emoji tile underneath is shown instead.
   To use your own photos, replace ph() with a path such as 'assets/photos/'+id+'.jpg' */
const ph=(id,w)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w||600}&q=70`;
const IMG={
 'Medicines':['1584308666744-24d5c474f2ae','1471864190281-a93a3070b6de','1550572017-edd951b55104'],
 'Skin Care':['1556228578-0d85b1a4d571','1620916566398-39f1143ab7be','1556228720-195a672e8a03'],
 'Baby & Mum':['1515488042361-ee00e0ddd4e4','1519689680058-324335c77eba','1522771930-78848d9293e8'],
 'Supplements':['1607619056574-7b8d3ee536b2','1584017911766-d451b3d0e843','1550572017-edd951b55104'],
 'Personal Care':['1556228720-195a672e8a03','1607006333439-1d6a6cf9a5d8','1556228578-0d85b1a4d571'],
 'Devices':['1584515933487-779824d29309','1576091160399-112ba8d25d1d','1559757148-5c350d0d3c56'],
 'Sexual Health':['1584308666744-24d5c474f2ae','1471864190281-a93a3070b6de','1550572017-edd951b55104'],
 'First Aid':['1603398938378-e54eab446dde','1584515933487-779824d29309','1631549916768-4119b2e5f926'],
 'Cold & Flu':['1471864190281-a93a3070b6de','1584308666744-24d5c474f2ae','1631549916768-4119b2e5f926']};
const pim=p=>`<img src="${ph(IMG[p.c][p.id%3])}" alt="${p.n.replace(/"/g,'')}" loading="lazy" onerror="this.remove()">`;
