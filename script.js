// ---- DATA ----
const chaptersData = {
  Mathematics: {
    1: ['Counting Numbers', 'Addition', 'Subtraction', 'Shapes', 'Measurements'],
    2: ['Numbers 1-100', 'Addition & Subtraction', 'Multiplication Basics', 'Fractions Intro', 'Time & Calendar'],
    3: ['Large Numbers', 'Multiplication', 'Division', 'Fractions', 'Geometry Basics'],
    4: ['4-Digit Numbers', 'Fractions & Decimals', 'Factors & Multiples', 'Geometry', 'Data Handling'],
    5: ['Large Numbers', 'LCM & HCF', 'Fractions', 'Decimals', 'Percentage', 'Area & Perimeter'],
    6: ['Knowing Numbers', 'Whole Numbers', 'Playing with Numbers', 'Basic Geometry', 'Integers', 'Fractions'],
    7: ['Integers', 'Fractions & Decimals', 'Data Handling', 'Simple Equations', 'Lines & Angles', 'Triangles'],
    8: ['Rational Numbers', 'Linear Equations', 'Squares & Square Roots', 'Cubes & Cube Roots', 'Comparing Quantities', 'Algebraic Expressions'],
    9: ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations', 'Euclids Geometry', 'Lines & Angles', 'Triangles', 'Quadrilaterals', 'Areas', 'Circles', 'Constructions', 'Herons Formula', 'Surface Areas & Volumes', 'Statistics', 'Probability'],
    10: ['Real Numbers', 'Polynomials', 'Pair of Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Trigonometry', 'Some Applications of Trigonometry', 'Circles', 'Areas Related to Circles', 'Surface Areas & Volumes', 'Statistics', 'Probability'],
    11: ['Sets', 'Relations & Functions', 'Trigonometric Functions', 'Principle of Mathematical Induction', 'Complex Numbers', 'Linear Inequalities', 'Permutations & Combinations', 'Binomial Theorem', 'Sequences & Series', 'Straight Lines', 'Conic Sections', '3D Geometry', 'Limits & Derivatives', 'Statistics', 'Probability'],
    12: ['Relations & Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Continuity & Differentiability', 'Applications of Derivatives', 'Integrals', 'Applications of Integrals', 'Differential Equations', 'Vector Algebra', '3D Geometry', 'Linear Programming', 'Probability']
  },
  Science: {
    1: ['Plants Around Us', 'Animals', 'Our Body', 'Food We Eat', 'Air & Water'],
    2: ['Plants & Animals', 'Food', 'Housing', 'Water', 'Travel & Communication'],
    3: ['Plants', 'Animals', 'Food', 'Our Body', 'Rocks & Soil', 'Air', 'Water'],
    4: ['Plants', 'Animals', 'Food', 'Water', 'Air', 'Rocks & Soil'],
    5: ['Super Senses', 'A Snake Charmers Story', 'From Tasting to Digesting', 'Mangoes Round the Year', 'Seeds & Seeds', 'Every Drop Counts'],
    6: ['Food: Where Does It Come From', 'Components of Food', 'Fibre to Fabric', 'Sorting Materials', 'Separation of Substances', 'Changes Around Us', 'Getting to Know Plants', 'Body Movements', 'Living Organisms', 'Motion & Measurement', 'Light Shadows & Reflections', 'Electricity & Circuits', 'Fun with Magnets', 'Water', 'Air Around Us', 'Garbage In Garbage Out'],
    7: ['Nutrition in Plants', 'Nutrition in Animals', 'Fibre to Fabric', 'Heat', 'Acids Bases & Salts', 'Physical & Chemical Changes', 'Weather Climate & Adaptations', 'Winds Storms & Cyclones', 'Soil', 'Respiration in Organisms', 'Transportation in Animals & Plants', 'Reproduction in Plants', 'Motion & Time', 'Electric Current & Its Effects', 'Light', 'Water', 'Forests', 'Wastewater Story'],
    8: ['Crop Production', 'Microorganisms', 'Synthetic Fibres & Plastics', 'Materials Metals & Non-Metals', 'Coal & Petroleum', 'Combustion & Flame', 'Conservation of Plants & Animals', 'Cell', 'Reproduction in Animals', 'Reaching Age of Adolescence', 'Force & Pressure', 'Friction', 'Sound', 'Chemical Effects of Electric Current', 'Some Natural Phenomena', 'Light', 'Stars & Solar System', 'Pollution of Air & Water'],
    9: ['Matter in Our Surroundings', 'Is Matter Around Us Pure', 'Atoms & Molecules', 'Structure of Atom', 'The Fundamental Unit of Life', 'Tissues', 'Motion', 'Force & Laws of Motion', 'Gravitation', 'Work & Energy', 'Sound', 'Why Do We Fall Ill', 'Natural Resources', 'Improvement in Food Resources'],
    10: ['Chemical Reactions', 'Acids Bases & Salts', 'Metals & Non-Metals', 'Carbon & Its Compounds', 'Life Processes', 'Control & Coordination', 'Reproduction', 'Heredity', 'Light – Reflection & Refraction', 'Human Eye & Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Our Environment'],
    11: ['Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Structural Organisation in Animals', 'Cell – The Unit of Life', 'Biomolecules', 'Cell Cycle & Cell Division', 'Transport in Plants', 'Mineral Nutrition', 'Photosynthesis', 'Respiration', 'Plant Growth', 'Digestion & Absorption', 'Breathing & Exchange of Gases', 'Body Fluids & Circulation', 'Excretory Products', 'Locomotion & Movement', 'Neural Control', 'Chemical Coordination'],
    12: ['Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health & Disease', 'Micro microbes in Human Welfare', 'Biotechnology Principles', 'Biotechnology Applications', 'Organisms & Populations', 'Ecosystem', 'Biodiversity', 'Environmental Issues']
  },
  English: {
    1: ['Alphabet & Phonics', 'Words', 'Simple Sentences', 'Stories', 'Poems'],
    2: ['Reading Comprehension', 'Grammar Basics', 'Storytelling', 'Poems', 'Writing Practice'],
    3: ['My Best Friend', 'The Enormous Turnip', 'Water', 'The Magic Garden', 'Wind & Sun', 'Little Tiger Big Tiger'],
    4: ['Wake Up', 'Nehas Alarm Clock', 'Noses', 'The Little Fir Tree', 'Run', 'Nasruddin Hodja', 'A Watering Rhyme', 'The Scholar Mother'],
    5: ['Ice Cream Man', 'Wonderful Waste', 'Teamwork', 'Flying Together', 'Sports Day', 'My Shadow', 'Robinson Crusoe', 'Crying'],
    6: ['Who Did Patrick Homework', 'How the Dog Found Itself', 'Taros Reward', 'An Indian – American Woman in Space', 'A Different Kind of School', 'Who I Am', 'Fair Play', 'A Game of Chance', 'Desert Animals', 'The Banyan Tree'],
    7: ['Three Questions', 'A Gift of Chappals', 'Gopal the Jester', 'The Ashes that Made Trees Bloom', 'Quality', 'Expert Detectives', 'The Invention of Vita-Wonk', 'Fire: Friend and Foe', 'A Bicycle in Good Repair', 'The Story of Cricket'],
    8: ['The Best Christmas Present', 'The Tsunami', 'Glimpses of the Past', 'Bepin Choudharys Lapse of Memory', 'The Summit Within', 'This is Jody Father', 'A Visit to Cambridge', 'A Short Monsoon Diary', 'The Great Stone Face'],
    9: ['The Fun They Had', 'The Sound of Music', 'The Little Girl', 'A Truly Beautiful Mind', 'The Snake & the Mirror', 'My Childhood', 'Packing', 'Reach for the Top', 'The Bond of Love', 'Kathmandu', 'If I Were You'],
    10: ['A Letter to God', 'Nelson Mandela', 'Two Stories About Flying', 'From the Diary of Anne Frank', 'The Hundred Dresses', 'Glimpse of India', 'Mijbil the Otter', 'Madam Rides the Bus', 'The Sermon at Benares', 'The Proposal'],
    11: ['The Portrait of a Lady', 'We are not Afraid to Die', 'Discovering Tut', 'Landscape of the Soul', 'The Ailing Planet', 'The Browning Version', 'The Adventure', 'Silk Road'],
    12: ['The Last Lesson', 'Lost Spring', 'Deep Water', 'The Rattrap', 'Indigo', 'Poets & Pancakes', 'The Interview', 'Going Places']
  },
  SSt: {
    1: ['My Family', 'My School', 'My Neighbourhood', 'Our Helpers', 'Means of Transport', 'Festivals We Celebrate'],
    2: ['Our Body', 'Food We Eat', 'Clothes We Wear', 'Our Home', 'Our Country', 'People Who Help Us'],
    3: ['Maps & Directions', 'My Village My Town', 'Plants & Animals', 'Water', 'Air & Weather', 'Our Country India'],
    4: ['States & Capitals', 'Rivers of India', 'Mountains & Plains', 'History of India – Early Period', 'Local Self Government', 'Our Environment'],
    5: ['Geographical Features of India', 'Indian History – Ancient Period', 'Freedom Fighters', 'Government & Democracy', 'Resources', 'India & Its Neighbours'],
    6: ['What Where How and When', 'On the Trail of the Earliest People', 'From Gathering to Growing Food', 'In the Earliest Cities', 'What Books and Burials Tell Us', 'Kingdoms Kings and Early Republic', 'New Questions and Ideas', 'The Globe: Latitudes & Longitudes', 'Motions of the Earth', 'Maps', 'Understanding Diversity', 'Diversity and Discrimination', 'What is Government', 'Rural Administration', 'Urban Administration'],
    7: ['Tracing Changes Through a Thousand Years', 'New Kings and Kingdoms', 'The Delhi Sultans', 'The Mughal Empire', 'Rulers and Buildings', 'Towns Traders and Craftspersons', 'Tribes Nomads and Settled Communities', 'Environment', 'Inside Our Earth', 'Our Changing Earth', 'Air', 'Water', 'Human Environment', 'Democracy', 'State Government', 'Media and Democracy'],
    8: ['How When and Where', 'From Trade to Territory', 'Ruling the Countryside', 'Tribals Dikus and the Vision of a Golden Age', 'When People Rebel', 'Civilising the Native Educating the Nation', 'Women Caste and Reform', 'The Making of the National Movement', 'India After Independence', 'Resources', 'Land Soil Water Natural Vegetation and Wildlife', 'Mineral and Power Resources', 'Agriculture', 'Industries', 'Human Resources', 'The Indian Constitution', 'Understanding Secularism', 'Why Do We Need a Parliament', 'Understanding Laws', 'Judiciary', 'Understanding Our Criminal Justice System', 'Understanding Marginalisation'],
    9: ['The French Revolution', 'Socialism in Europe and the Russian Revolution', 'Nazism and the Rise of Hitler', 'Forest Society and Colonialism', 'Pastoralists in the Modern World', 'Peasants and Farmers', 'Physical Features of India', 'Drainage', 'Climate', 'Natural Vegetation and Wild Life', 'Population', 'What is Democracy', 'Constitutional Design', 'Electoral Politics', 'Working of Institutions', 'Democratic Rights', 'The Story of Village Palampur', 'People as Resource', 'Poverty as a Challenge', 'Food Security in India'],
    10: ['The Rise of Nationalism in Europe', 'Nationalism in India', 'The Making of a Global World', 'The Age of Industrialisation', 'Print Culture and the Modern World', 'Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Life Lines of National Economy', 'Power Sharing', 'Federalism', 'Democracy and Diversity', 'Gender Religion and Caste', 'Popular Struggles and Movements', 'Political Parties', 'Outcomes of Democracy', 'Challenges to Democracy', 'Development', 'Sectors of the Indian Economy', 'Money and Credit', 'Globalisation and the Indian Economy', 'Consumer Rights']
  },
  AI: {
    6: ['Introduction to Artificial Intelligence', 'History of AI', 'Types of AI Systems', 'Problem Solving Basics', 'Decision Making', 'AI in Daily Life'],
    7: ['What is Data?', 'Collecting and Organising Data', 'Introduction to Algorithms', 'Flowcharts and Logic', 'Pattern Recognition', 'AI Applications Around Us'],
    8: ['Machine Learning Basics', 'Supervised vs Unsupervised Learning', 'Introduction to Neural Networks', 'Natural Language Processing Basics', 'Computer Vision Introduction', 'Ethics in AI'],
    9: ['Deep Learning Concepts', 'Data Preprocessing', 'Training and Testing Models', 'AI in Healthcare', 'AI in Agriculture', 'Robotics and Automation', 'Bias and Fairness in AI'],
    10: ['Introduction to Python for AI', 'Working with Datasets', 'Building a Simple ML Model', 'AI Project Lifecycle', 'Future of AI & Careers', 'AI Safety and Regulations'],
    11: ['Advanced Python & Libraries (NumPy, Pandas)', 'Data Visualisation', 'Supervised Learning Algorithms', 'Unsupervised Learning Algorithms', 'Model Evaluation & Metrics', 'Introduction to Deep Learning', 'AI Ethics & Society'],
    12: ['Neural Networks & Backpropagation', 'Convolutional Neural Networks (CNNs)', 'Recurrent Neural Networks (RNNs)', 'Natural Language Processing (NLP)', 'Generative AI & LLMs', 'Reinforcement Learning', 'AI Project Deployment', 'AI in Industry – Case Studies']
  }
};

let selectedBoard = 'CBSE';
let selectedSubject = null;
let selectedClass = null;
let fbIdx = 0;

function selectBoard(board, el) {
  document.querySelectorAll('.board-option').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  selectedBoard = board;
  if (selectedClass && selectedSubject) showChapters();
}

function selectClass(cls, el) {
  document.querySelectorAll('.class-num').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  selectedClass = cls;
  if (selectedSubject) showChapters();
}

function selectSubject(subj, el) {
  document.querySelectorAll('.subj-item').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  selectedSubject = subj;
  if (selectedClass) showChapters();
  else {
    document.getElementById('chapterPanel').classList.add('visible');
    document.getElementById('chapterTitle').textContent = '📚 ' + subj + ' – Please select a class above';
    document.getElementById('chapterList').innerHTML = '<li><span style="color:#888;font-style:italic;">Select a class number to see chapters</span></li>';
  }
}

function showChapters() {
  const panel = document.getElementById('chapterPanel');
  const title = document.getElementById('chapterTitle');
  const list = document.getElementById('chapterList');
  panel.classList.add('visible');
  const chapters = (chaptersData[selectedSubject] || {})[selectedClass] || [];
  title.textContent = '📚 ' + selectedBoard + ' – ' + selectedSubject + ' – Class ' + selectedClass + ' Chapters';
  if (!chapters.length) {
    list.innerHTML = '<li><span style="color:#888;">Chapters coming soon!</span></li>';
    return;
  }
  list.innerHTML = chapters.map((ch, i) =>
    `<li>
      <span class="ch-name">${selectedBoard} Chapter ${i + 1}: ${ch}</span>
      <span class="ch-num"></span>
      <button class="dl-btn" onclick="downloadPDF('${ch}','${selectedSubject}',${selectedClass})">📥 Download PDF</button>
    </li>`
  ).join('');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function downloadPDF(chapter, subject, cls) {
  alert('📄 Download Starting...\n\n' + subject + ' | Class ' + cls + '\n"' + chapter + '"\n\n(PDF download feature coming soon!)');
}

function slideFb(dir) {
  const track = document.getElementById('fbTrack');
  const cards = track.querySelectorAll('.fb-card');
  const visible = 1; // Show 1 card at a time in the split view
  const max = cards.length - 1;
  fbIdx = Math.max(0, Math.min(fbIdx + dir, max));
  track.style.transform = 'translateX(-' + (fbIdx * (100)) + '%)';
  updateDots('fbDots', fbIdx);
}

function updateDots(containerId, idx) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const dots = container.querySelectorAll('.dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

// Auto slide
setInterval(() => {
  fbIdx++;
  if (fbIdx > 6) fbIdx = 0;
  slideFb(0);
}, 5000);

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (navLinks) navLinks.classList.remove('active');
  });
});

// Modal
function openModal(title, sub) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalSub').textContent = sub;
  document.getElementById('modalDesc').textContent = title + ' – Click play to watch';
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ---- DUAL REGISTRATION MODAL LOGIC ----
const WHATSAPP_NUMBER = "917706990114"; // Configured WhatsApp Number

function openRegModal(tabName) {
  const regModal = document.getElementById('regModal');
  if (regModal) {
    regModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (tabName) {
      switchRegTab(tabName);
    }
  }
}

function closeRegModal(e) {
  if (!e || e.target === document.getElementById('regModal')) {
    const regModal = document.getElementById('regModal');
    if (regModal) {
      regModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
}

function switchRegTab(tabName) {
  const tabStudent = document.getElementById('tabStudent');
  const tabTeacher = document.getElementById('tabTeacher');
  const formStudent = document.getElementById('formStudent');
  const formTeacher = document.getElementById('formTeacher');
  const regBox = document.querySelector('.reg-modal-box');

  if (tabName === 'student') {
    tabStudent.classList.add('active');
    tabTeacher.classList.remove('active');
    formStudent.classList.add('active');
    formTeacher.classList.remove('active');
    if (regBox) regBox.style.borderTopColor = 'var(--green)';
  } else {
    tabStudent.classList.remove('active');
    tabTeacher.classList.add('active');
    formStudent.classList.remove('active');
    formTeacher.classList.add('active');
    if (regBox) regBox.style.borderTopColor = 'var(--red)';
  }
}

function submitStudentForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('studentName').value;
  const cls = document.getElementById('studentClass').value;
  const board = document.getElementById('studentBoard').value;
  const subjects = document.getElementById('studentSubjects').value;
  const mode = document.getElementById('studentMode').value;
  const location = document.getElementById('studentLocation').value;
  const phone = document.getElementById('studentPhone').value;

  const messageText = 
`*Tuition Station - New Student/Parent Enquiry*
------------------------------------------------
*Name:* ${name}
*Class:* ${cls}
*Board:* ${board}
*Subjects Needed:* ${subjects}
*Preferred Mode:* ${mode}
*Location:* ${location}
*WhatsApp:* ${phone}
------------------------------------------------
_Directly run by Aditya Sir_`;

  const encodedText = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  
  window.open(whatsappUrl, '_blank');
  
  // Reset form and close modal
  document.getElementById('formStudent').reset();
  closeRegModal();
}

function submitTeacherForm(event) {
  event.preventDefault();

  const name = document.getElementById('teacherName').value;
  const qual = document.getElementById('teacherQual').value;
  const exp = document.getElementById('teacherExp').value;
  const subjects = document.getElementById('teacherSubjects').value;
  const classes = document.getElementById('teacherClasses').value;
  const mode = document.getElementById('teacherMode').value;
  const location = document.getElementById('teacherLoc').value;
  const phone = document.getElementById('teacherPhone').value;

  const messageText = 
`*Tuition Station - New Tutor Registration*
------------------------------------------------
*Name:* ${name}
*Qualification:* ${qual}
*Experience:* ${exp} Years
*Subjects:* ${subjects}
*Target Classes:* ${classes}
*Teaching Mode:* ${mode}
*Preferred Areas:* ${location}
*WhatsApp:* ${phone}
------------------------------------------------
_Directly run by Aditya Sir_`;

  const encodedText = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  
  window.open(whatsappUrl, '_blank');
  
  // Reset form and close modal
  document.getElementById('formTeacher').reset();
  closeRegModal();
}

// Toppers Showcase slide loop
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.ts-topper-card');
  if (cards.length > 0) {
    let currentIdx = 0;
    setInterval(() => {
      cards[currentIdx].classList.remove('active');
      currentIdx = (currentIdx + 1) % cards.length;
      cards[currentIdx].classList.add('active');
    }, 3000);
  }
});


