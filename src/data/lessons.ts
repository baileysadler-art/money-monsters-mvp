import { Lesson, TrackId } from '../types';

// ═══════════════════════════════════════════
// MONEY BASICS (5 lessons)
// ═══════════════════════════════════════════
const moneyBasicsLessons: Lesson[] = [
  {
    id: 'money-basics-0', trackId: 'money-basics', index: 0,
    title: 'What is Money?', description: 'Learn what money is and why we use it', xpReward: 20,
    screens: [
      { type: 'content', title: 'What is Money?', body: 'Money is something people use to buy things they need or want. A long time ago, people traded things with each other — a farmer might trade eggs for bread. This was called bartering. But bartering was tricky, so people invented money! Money is a tool that everyone agrees has value.' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What do we use money for?', options: [{ id: 'a', text: 'To buy things' }, { id: 'b', text: 'To plant in the garden' }, { id: 'c', text: 'To throw away' }], correctAnswer: 'a', explanation: 'We use money to buy things we need or want!' },
        medium: { question: 'What was it called when people traded items instead of using money?', options: [{ id: 'a', text: 'Shopping' }, { id: 'b', text: 'Bartering' }, { id: 'c', text: 'Gifting' }], correctAnswer: 'b', explanation: 'Bartering is trading goods directly, like swapping eggs for bread.' },
        hard: { question: 'Why did bartering become impractical as communities grew?', options: [{ id: 'a', text: 'People ran out of things to trade' }, { id: 'b', text: 'It required a "double coincidence of wants"' }, { id: 'c', text: 'Bartering was made illegal' }], correctAnswer: 'b', explanation: 'Both people must want what the other has. Money solves this as a universal medium of exchange.' },
      }},
      { type: 'true-false', variants: {
        easy: { question: 'Money helps us buy things we need.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'Money is a tool we use to buy things like food, clothes, and toys.' },
        medium: { question: 'A £10 note has value because the polymer itself is worth ten pounds.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'The polymer is not worth much — it has value because everyone agrees to accept it.' },
        hard: { question: 'Money functions as a "store of value" for future use.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'One of money\'s key functions is storing purchasing power for the future.' },
      }},
      { type: 'tap-match', variants: {
        easy: { question: 'Match each word to what it means!', matchPairs: [{ left: 'Money', right: 'Used to buy things' }, { left: 'Trade', right: 'Swap one thing for another' }, { left: 'Save', right: 'Keep for later' }], explanation: 'Great matching!' },
        medium: { question: 'Match the money concept to its description.', matchPairs: [{ left: 'Bartering', right: 'Trading goods directly' }, { left: 'Currency', right: 'A country\'s form of money' }, { left: 'Value', right: 'How much something is worth' }], explanation: 'Well done!' },
        hard: { question: 'Match each function of money.', matchPairs: [{ left: 'Medium of exchange', right: 'Accepted for buying/selling' }, { left: 'Store of value', right: 'Holds worth over time' }, { left: 'Unit of account', right: 'Measures price of goods' }], explanation: 'Money serves multiple functions in our economy.' },
      }},
    ],
  },
  {
    id: 'money-basics-1', trackId: 'money-basics', index: 1,
    title: 'Coins and Notes', description: 'Learn about different coins and notes', xpReward: 20,
    screens: [
      { type: 'content', title: 'Meet the Coins!', body: 'In the UK we use coins and polymer notes. Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1, and £2. The smaller copper ones are 1p and 2p. Silver ones are 5p, 10p, 20p, and 50p. The £1 coin is gold and silver, and every coin features King Charles III!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'Which coin is worth 50 pence?', options: [{ id: 'a', text: '1p coin' }, { id: 'b', text: '10p coin' }, { id: 'c', text: '50p coin' }], correctAnswer: 'c', explanation: 'The 50p coin — the seven-sided one!' },
        medium: { question: 'UK notes are made from which material?', options: [{ id: 'a', text: 'Regular paper' }, { id: 'b', text: 'Cotton and linen' }, { id: 'c', text: 'Polymer (flexible plastic)' }], correctAnswer: 'c', explanation: 'UK notes are polymer — waterproof and durable!' },
        hard: { question: 'Which security feature is found on UK polymer notes?', options: [{ id: 'a', text: 'Magnetic barcode' }, { id: 'b', text: 'Transparent window with hologram' }, { id: 'c', text: 'GPS chip' }], correctAnswer: 'b', explanation: 'Transparent windows with holograms prevent counterfeiting.' },
      }},
      { type: 'true-false', variants: {
        easy: { question: 'A 5p coin is bigger than a 10p coin.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'The 5p is smaller than the 10p!' },
        medium: { question: 'All UK coins feature King Charles III.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'All current coins feature the reigning monarch.' },
        hard: { question: 'The Bank of England £1 note is still used.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'The £1 note was replaced by the £1 coin in 1988.' },
      }},
    ],
  },
  {
    id: 'money-basics-2', trackId: 'money-basics', index: 2,
    title: 'Writing Money Amounts', description: 'Learn to write pounds and pence correctly', xpReward: 20,
    screens: [
      { type: 'content', title: 'Pounds and Pence', body: 'In the UK, we write money using the £ symbol for pounds and p for pence. 100 pence = £1. So £3.50 means three pounds and fifty pence. The dot separates pounds from pence. Always write the £ sign before the number!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'How do you write three pounds and fifty pence?', options: [{ id: 'a', text: '3.50p' }, { id: 'b', text: '£3.50' }, { id: 'c', text: '350£' }], correctAnswer: 'b', explanation: '£3.50 — the £ goes first!' },
        medium: { question: 'How many pence are in £2.75?', options: [{ id: 'a', text: '275 pence' }, { id: 'b', text: '27.5 pence' }, { id: 'c', text: '2750 pence' }], correctAnswer: 'a', explanation: '£2.75 = 275 pence (2 × 100 + 75).' },
        hard: { question: 'You have £4.99 and spend £2.50. What do you have left?', options: [{ id: 'a', text: '£2.49' }, { id: 'b', text: '£2.50' }, { id: 'c', text: '£1.99' }], correctAnswer: 'a', explanation: '£4.99 - £2.50 = £2.49.' },
      }},
      { type: 'fill-blank', variants: {
        easy: { question: 'There are ___ pence in one pound.', options: [{ id: 'a', text: '10' }, { id: 'b', text: '100' }, { id: 'c', text: '1000' }], correctAnswer: 'b', explanation: '100 pence = £1!' },
        medium: { question: '£1.50 written in pence only is ___ p.', options: [{ id: 'a', text: '15' }, { id: 'b', text: '150' }, { id: 'c', text: '1500' }], correctAnswer: 'b', explanation: '£1.50 = 150p.' },
        hard: { question: '£0.05 is the same as ___ pence.', options: [{ id: 'a', text: '0.5' }, { id: 'b', text: '5' }, { id: 'c', text: '50' }], correctAnswer: 'b', explanation: '£0.05 = 5p.' },
      }},
    ],
  },
  {
    id: 'money-basics-3', trackId: 'money-basics', index: 3,
    title: 'Earning Money', description: 'Discover how people earn money', xpReward: 20,
    screens: [
      { type: 'content', title: 'How Do People Earn Money?', body: 'People earn money by working — doing jobs that help others. A teacher earns money by helping children learn, a doctor earns money by helping people get better, and a shop assistant earns money by helping customers buy things. As a child, you might earn money through pocket money or doing extra chores!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'How do most grown-ups earn money?', options: [{ id: 'a', text: 'By finding it on the ground' }, { id: 'b', text: 'By doing a job' }, { id: 'c', text: 'By wishing for it' }], correctAnswer: 'b', explanation: 'Most adults earn money by working at a job.' },
        medium: { question: 'Which is an example of earning money as a child?', options: [{ id: 'a', text: 'Finding coins in the sofa' }, { id: 'b', text: 'Doing chores for pocket money' }, { id: 'c', text: 'Taking money from a parent\'s wallet' }], correctAnswer: 'b', explanation: 'Doing chores to earn pocket money is a great way to start earning!' },
        hard: { question: 'What is the difference between a salary and wages?', options: [{ id: 'a', text: 'Salary is fixed annual pay; wages are paid per hour' }, { id: 'b', text: 'They mean the same thing' }, { id: 'c', text: 'Wages are always higher' }], correctAnswer: 'a', explanation: 'A salary is a fixed annual amount, while wages are paid based on hours worked.' },
      }},
      { type: 'true-false', variants: {
        easy: { question: 'You can earn pocket money by helping at home.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'Many children earn money by helping with chores!' },
        medium: { question: 'All jobs pay exactly the same amount.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'Different jobs pay different amounts based on skills needed.' },
        hard: { question: 'Self-employed people have tax deducted automatically by an employer.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'Self-employed people manage their own tax through self-assessment.' },
      }},
    ],
  },
  {
    id: 'money-basics-4', trackId: 'money-basics', index: 4,
    title: 'Banks and Saving', description: 'Learn about banks and why they matter', xpReward: 20,
    screens: [
      { type: 'content', title: 'What is a Bank?', body: 'A bank is a safe place to keep your money. Banks look after your money and can even help it grow through interest! When you put money in a bank, it\'s called a deposit. When you take money out, it\'s called a withdrawal. Your money is protected by the government up to £85,000!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What is a bank?', options: [{ id: 'a', text: 'A shop' }, { id: 'b', text: 'A safe place for money' }, { id: 'c', text: 'A playground' }], correctAnswer: 'b', explanation: 'Banks keep your money safe and can help it grow.' },
        medium: { question: 'What is it called when you put money INTO a bank?', options: [{ id: 'a', text: 'Withdrawal' }, { id: 'b', text: 'Deposit' }, { id: 'c', text: 'Transfer' }], correctAnswer: 'b', explanation: 'A deposit is putting money into your bank account.' },
        hard: { question: 'How much money is protected by the FSCS in UK banks?', options: [{ id: 'a', text: '£50,000' }, { id: 'b', text: '£85,000' }, { id: 'c', text: '£100,000' }], correctAnswer: 'b', explanation: 'The FSCS protects up to £85,000 per person per bank.' },
      }},
      { type: 'tap-match', variants: {
        easy: { question: 'Match the banking words!', matchPairs: [{ left: 'Deposit', right: 'Put money in' }, { left: 'Withdrawal', right: 'Take money out' }, { left: 'Balance', right: 'How much you have' }], explanation: 'Nice work with banking terms!' },
        medium: { question: 'Match each account type.', matchPairs: [{ left: 'Current account', right: 'Everyday spending' }, { left: 'Savings account', right: 'Earning interest' }, { left: 'ISA', right: 'Tax-free savings' }], explanation: 'Different accounts serve different purposes.' },
        hard: { question: 'Match financial terms.', matchPairs: [{ left: 'Interest rate', right: 'Percentage earned on savings' }, { left: 'Inflation', right: 'Prices rising over time' }, { left: 'FSCS', right: 'Protects bank deposits' }], explanation: 'Understanding these terms helps you manage money wisely.' },
      }},
    ],
  },
];

// ═══════════════════════════════════════════
// SAVING & BUDGETING (5 lessons)
// ═══════════════════════════════════════════
const savingBudgetingLessons: Lesson[] = [
  {
    id: 'saving-budgeting-0', trackId: 'saving-budgeting', index: 0,
    title: 'Why Save?', description: 'Learn why saving money is important', xpReward: 20,
    screens: [
      { type: 'content', title: 'The Power of Saving', body: 'Saving means keeping some of your money instead of spending it all right away. When you save, you build up money for things you really want or need later. It\'s like filling up your Money Monster\'s vault!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What does saving mean?', options: [{ id: 'a', text: 'Spending all your money' }, { id: 'b', text: 'Keeping money for later' }, { id: 'c', text: 'Giving all money away' }], correctAnswer: 'b', explanation: 'Saving means keeping money for the future!' },
        medium: { question: 'Why is saving important?', options: [{ id: 'a', text: 'So you can buy bigger things later' }, { id: 'b', text: 'It\'s not important' }, { id: 'c', text: 'Banks require you to save' }], correctAnswer: 'a', explanation: 'Saving helps you afford bigger goals over time.' },
        hard: { question: 'What is an emergency fund?', options: [{ id: 'a', text: 'Money for holidays' }, { id: 'b', text: 'Savings for unexpected expenses' }, { id: 'c', text: 'A type of investment' }], correctAnswer: 'b', explanation: 'An emergency fund covers unexpected costs like repairs.' },
      }},
      { type: 'true-false', variants: {
        easy: { question: 'Saving money helps you buy things you want later.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'Saving builds up money for your goals!' },
        medium: { question: 'You should always spend all your pocket money immediately.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'It\'s smart to save some for later.' },
        hard: { question: 'Financial experts recommend 3-6 months expenses as an emergency fund.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'This provides a safety net for unexpected events.' },
      }},
    ],
  },
  {
    id: 'saving-budgeting-1', trackId: 'saving-budgeting', index: 1,
    title: 'Setting Goals', description: 'Learn to set savings goals', xpReward: 20,
    screens: [
      { type: 'content', title: 'Savings Goals', body: 'A savings goal is something specific you\'re saving up for — like a new game, a bike, or a special trip. When you have a goal, saving becomes easier because you know exactly what you\'re working towards!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What is a savings goal?', options: [{ id: 'a', text: 'Something you want to save for' }, { id: 'b', text: 'A type of bank' }, { id: 'c', text: 'A kind of coin' }], correctAnswer: 'a', explanation: 'A savings goal gives you something to work towards!' },
        medium: { question: 'Which is a SMART savings goal?', options: [{ id: 'a', text: 'Save some money sometime' }, { id: 'b', text: 'Save £50 for a game by March' }, { id: 'c', text: 'Become very rich' }], correctAnswer: 'b', explanation: 'SMART goals are Specific, Measurable, and have a deadline.' },
        hard: { question: 'If you save £5 per week, how long to save £60?', options: [{ id: 'a', text: '10 weeks' }, { id: 'b', text: '12 weeks' }, { id: 'c', text: '15 weeks' }], correctAnswer: 'b', explanation: '£60 ÷ £5 = 12 weeks.' },
      }},
      { type: 'fill-blank', variants: {
        easy: { question: 'A savings ___ helps you know what you\'re saving for.', options: [{ id: 'a', text: 'goal' }, { id: 'b', text: 'problem' }, { id: 'c', text: 'monster' }], correctAnswer: 'a', explanation: 'Goals give your saving a purpose!' },
        medium: { question: 'SMART goals should be Specific, Measurable, Achievable, Relevant, and Time-___.', options: [{ id: 'a', text: 'tested' }, { id: 'b', text: 'bound' }, { id: 'c', text: 'total' }], correctAnswer: 'b', explanation: 'Time-bound means having a deadline.' },
        hard: { question: 'Breaking a big goal into smaller ___ makes it less overwhelming.', options: [{ id: 'a', text: 'problems' }, { id: 'b', text: 'milestones' }, { id: 'c', text: 'banks' }], correctAnswer: 'b', explanation: 'Milestones help track progress toward big goals.' },
      }},
    ],
  },
  {
    id: 'saving-budgeting-2', trackId: 'saving-budgeting', index: 2,
    title: 'Making a Budget', description: 'Create your first budget', xpReward: 20,
    screens: [
      { type: 'content', title: 'What is a Budget?', body: 'A budget is a plan for your money. It helps you decide how much to spend and how much to save. A simple rule is: Save some, Spend some, Share some!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What is a budget?', options: [{ id: 'a', text: 'A plan for your money' }, { id: 'b', text: 'A type of piggy bank' }, { id: 'c', text: 'A way to earn money' }], correctAnswer: 'a', explanation: 'A budget helps you plan spending and saving!' },
        medium: { question: 'If you get £10 pocket money and budget 50% for saving, how much do you save?', options: [{ id: 'a', text: '£3' }, { id: 'b', text: '£5' }, { id: 'c', text: '£7' }], correctAnswer: 'b', explanation: '50% of £10 = £5.' },
        hard: { question: 'Which budgeting method allocates every pound to a category?', options: [{ id: 'a', text: 'Zero-based budgeting' }, { id: 'b', text: 'Envelope method' }, { id: 'c', text: 'Pay yourself first' }], correctAnswer: 'a', explanation: 'Zero-based budgeting assigns every pound a job.' },
      }},
      { type: 'true-false', variants: {
        easy: { question: 'A budget helps you plan your spending.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'Budgets help you know where your money goes.' },
        medium: { question: 'You should spend all your money before making a budget.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'Make a budget BEFORE spending!' },
        hard: { question: 'The 50/30/20 rule suggests 50% needs, 30% wants, 20% savings.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'This popular rule helps balance spending and saving.' },
      }},
    ],
  },
  {
    id: 'saving-budgeting-3', trackId: 'saving-budgeting', index: 3,
    title: 'Interest', description: 'Learn how your money can grow', xpReward: 20,
    screens: [
      { type: 'content', title: 'What is Interest?', body: 'When you save money in a bank, the bank pays you a little extra money called interest. It\'s like a thank-you gift for letting the bank look after your money. The more you save, the more interest you earn!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What is interest?', options: [{ id: 'a', text: 'A fee you pay' }, { id: 'b', text: 'Extra money the bank gives you' }, { id: 'c', text: 'A type of coin' }], correctAnswer: 'b', explanation: 'Banks pay you interest for keeping your money with them.' },
        medium: { question: 'If you have £100 and earn 5% interest, how much do you have after a year?', options: [{ id: 'a', text: '£105' }, { id: 'b', text: '£150' }, { id: 'c', text: '£500' }], correctAnswer: 'a', explanation: '£100 + 5% = £100 + £5 = £105.' },
        hard: { question: 'What makes compound interest powerful?', options: [{ id: 'a', text: 'You earn interest on your interest' }, { id: 'b', text: 'The rate increases every year' }, { id: 'c', text: 'It\'s tax-free' }], correctAnswer: 'a', explanation: 'Compound interest earns interest on both principal and accumulated interest.' },
      }},
      { type: 'tap-match', variants: {
        easy: { question: 'Match saving terms!', matchPairs: [{ left: 'Interest', right: 'Extra money earned' }, { left: 'Deposit', right: 'Money put in bank' }, { left: 'Balance', right: 'Total in account' }], explanation: 'Great matching!' },
        medium: { question: 'Match interest types.', matchPairs: [{ left: 'Simple interest', right: 'Interest on original amount only' }, { left: 'Compound interest', right: 'Interest on interest too' }, { left: 'Interest rate', right: 'Percentage earned per year' }], explanation: 'Compound interest grows faster than simple interest!' },
        hard: { question: 'Match financial concepts.', matchPairs: [{ left: 'APR', right: 'Annual Percentage Rate' }, { left: 'AER', right: 'Annual Equivalent Rate (with compounding)' }, { left: 'Inflation', right: 'Reduces purchasing power over time' }], explanation: 'Understanding these helps compare savings accounts.' },
      }},
    ],
  },
  {
    id: 'saving-budgeting-4', trackId: 'saving-budgeting', index: 4,
    title: 'Needs vs Wants', description: 'Tell the difference between needs and wants', xpReward: 20,
    screens: [
      { type: 'content', title: 'Needs and Wants', body: 'Needs are things you must have to survive — food, water, shelter, clothing. Wants are things that are nice to have but not essential — toys, games, sweets. Understanding the difference helps you make smart money choices!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'Which is a NEED?', options: [{ id: 'a', text: 'A new video game' }, { id: 'b', text: 'Food' }, { id: 'c', text: 'A toy' }], correctAnswer: 'b', explanation: 'Food is essential — we need it to live!' },
        medium: { question: 'Which is a WANT?', options: [{ id: 'a', text: 'Warm clothing' }, { id: 'b', text: 'A roof over your head' }, { id: 'c', text: 'The latest trainers' }], correctAnswer: 'c', explanation: 'While you need shoes, the "latest" ones are a want.' },
        hard: { question: 'Why should needs be budgeted for before wants?', options: [{ id: 'a', text: 'Needs keep you safe and healthy' }, { id: 'b', text: 'Wants are always bad' }, { id: 'c', text: 'It\'s the law' }], correctAnswer: 'a', explanation: 'Prioritising needs ensures your essential costs are covered.' },
      }},
      { type: 'fill-blank', variants: {
        easy: { question: '___ are things you must have to survive.', options: [{ id: 'a', text: 'Needs' }, { id: 'b', text: 'Wants' }, { id: 'c', text: 'Wishes' }], correctAnswer: 'a', explanation: 'Needs are essential for survival.' },
        medium: { question: 'A ___ is nice to have but not essential.', options: [{ id: 'a', text: 'need' }, { id: 'b', text: 'want' }, { id: 'c', text: 'bill' }], correctAnswer: 'b', explanation: 'Wants make life more fun but aren\'t essential.' },
        hard: { question: 'Prioritising needs over wants is called financial ___.', options: [{ id: 'a', text: 'discipline' }, { id: 'b', text: 'stress' }, { id: 'c', text: 'freedom' }], correctAnswer: 'a', explanation: 'Financial discipline means making smart choices with your money.' },
      }},
    ],
  },
];

// ═══════════════════════════════════════════
// EARNING & JOBS (3 lessons)
// ═══════════════════════════════════════════
const earningLessons: Lesson[] = [
  {
    id: 'earning-money-0', trackId: 'earning-money', index: 0,
    title: 'Ways to Earn', description: 'Different ways people earn money', xpReward: 20,
    screens: [
      { type: 'content', title: 'How People Earn Money', body: 'People earn money in different ways. Some work for a company and get a salary. Others work for themselves. Even as a child, you can earn through chores, lemonade stands, or helping neighbours!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'Which is a way to earn money?', options: [{ id: 'a', text: 'Doing chores' }, { id: 'b', text: 'Sleeping' }, { id: 'c', text: 'Watching TV' }], correctAnswer: 'a', explanation: 'Doing chores is a great way to earn pocket money!' },
        medium: { question: 'What does "self-employed" mean?', options: [{ id: 'a', text: 'Working for a big company' }, { id: 'b', text: 'Working for yourself' }, { id: 'c', text: 'Not working at all' }], correctAnswer: 'b', explanation: 'Self-employed people run their own business.' },
        hard: { question: 'What is passive income?', options: [{ id: 'a', text: 'Money earned while actively working' }, { id: 'b', text: 'Money earned with minimal ongoing effort' }, { id: 'c', text: 'Government benefits' }], correctAnswer: 'b', explanation: 'Passive income, like rental income or dividends, requires less active work.' },
      }},
      { type: 'true-false', variants: {
        easy: { question: 'You can earn money by helping people.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'Many jobs are about helping others!' },
        medium: { question: 'An entrepreneur starts their own business.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'Entrepreneurs create businesses to solve problems.' },
        hard: { question: 'In the UK, you start paying income tax from the first pound you earn.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'There\'s a personal allowance (around £12,570) before you pay tax.' },
      }},
    ],
  },
  {
    id: 'earning-money-1', trackId: 'earning-money', index: 1,
    title: 'Pocket Money', description: 'Making the most of pocket money', xpReward: 20,
    screens: [
      { type: 'content', title: 'Pocket Money Power', body: 'Pocket money is often a child\'s first experience with managing money. Whether you get a fixed amount each week or earn it through chores, pocket money teaches you important lessons about saving, spending, and choosing wisely.' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What should you do with pocket money?', options: [{ id: 'a', text: 'Spend it all immediately' }, { id: 'b', text: 'Save some and spend some' }, { id: 'c', text: 'Hide it under the bed' }], correctAnswer: 'b', explanation: 'A mix of saving and spending is smart!' },
        medium: { question: 'If you get £5 per week and save £2, how much do you save in 4 weeks?', options: [{ id: 'a', text: '£6' }, { id: 'b', text: '£8' }, { id: 'c', text: '£10' }], correctAnswer: 'b', explanation: '£2 × 4 weeks = £8 saved.' },
        hard: { question: 'What is the "pay yourself first" principle?', options: [{ id: 'a', text: 'Spend on yourself before bills' }, { id: 'b', text: 'Save a portion before spending anything' }, { id: 'c', text: 'Only buy things for yourself' }], correctAnswer: 'b', explanation: 'Pay yourself first means saving before spending.' },
      }},
      { type: 'fill-blank', variants: {
        easy: { question: 'Pocket money helps you learn about ___.', options: [{ id: 'a', text: 'cooking' }, { id: 'b', text: 'money' }, { id: 'c', text: 'sports' }], correctAnswer: 'b', explanation: 'Pocket money is a great way to learn money skills!' },
        medium: { question: 'Saving ___ of your pocket money each week adds up over time.', options: [{ id: 'a', text: 'all' }, { id: 'b', text: 'a portion' }, { id: 'c', text: 'none' }], correctAnswer: 'b', explanation: 'Even saving a small amount regularly can add up.' },
        hard: { question: 'Tracking where your money goes is called keeping a money ___.', options: [{ id: 'a', text: 'diary' }, { id: 'b', text: 'secret' }, { id: 'c', text: 'trophy' }], correctAnswer: 'a', explanation: 'A money diary helps you understand your spending habits.' },
      }},
    ],
  },
  {
    id: 'earning-money-2', trackId: 'earning-money', index: 2,
    title: 'First Jobs', description: 'Understanding your first job', xpReward: 20,
    screens: [
      { type: 'content', title: 'Your First Job', body: 'When you\'re old enough, getting a part-time job can be exciting! In the UK, you can start working part-time from age 13. Popular first jobs include paper rounds, babysitting, and helping at local shops. You\'ll learn responsibility and earn your own money!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'At what age can UK children start part-time work?', options: [{ id: 'a', text: '10' }, { id: 'b', text: '13' }, { id: 'c', text: '18' }], correctAnswer: 'b', explanation: 'You can start light part-time work from age 13.' },
        medium: { question: 'What is a payslip?', options: [{ id: 'a', text: 'A receipt from a shop' }, { id: 'b', text: 'A document showing your earnings and deductions' }, { id: 'c', text: 'A type of bank account' }], correctAnswer: 'b', explanation: 'Payslips show how much you earned and any deductions.' },
        hard: { question: 'What is National Insurance?', options: [{ id: 'a', text: 'Car insurance' }, { id: 'b', text: 'A UK tax that funds public services like the NHS' }, { id: 'c', text: 'Home insurance' }], correctAnswer: 'b', explanation: 'National Insurance contributions fund the NHS and state pension.' },
      }},
      { type: 'true-false', variants: {
        easy: { question: 'A paper round is a job delivering newspapers.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'Paper rounds are a popular first job for young people.' },
        medium: { question: 'Young workers in the UK have the same minimum wage as adults.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'The UK has lower minimum wage rates for younger workers.' },
        hard: { question: 'All UK workers are entitled to paid holiday.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'UK workers are legally entitled to at least 5.6 weeks paid holiday.' },
      }},
    ],
  },
];

// ═══════════════════════════════════════════
// SMART SPENDING (3 lessons)
// ═══════════════════════════════════════════
const smartSpendingLessons: Lesson[] = [
  {
    id: 'smart-spending-0', trackId: 'smart-spending', index: 0,
    title: 'Smart Choices', description: 'Making wise spending decisions', xpReward: 20,
    screens: [
      { type: 'content', title: 'Spend Wisely!', body: 'Being a smart spender means thinking before you buy. Ask yourself: Do I really need this? Can I find it cheaper? Will I still want this next week? These questions help you avoid impulse buying!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What should you do before buying something?', options: [{ id: 'a', text: 'Buy it immediately' }, { id: 'b', text: 'Think about whether you really need it' }, { id: 'c', text: 'Buy two of everything' }], correctAnswer: 'b', explanation: 'Always think before spending!' },
        medium: { question: 'What is "impulse buying"?', options: [{ id: 'a', text: 'Carefully planned shopping' }, { id: 'b', text: 'Buying without thinking' }, { id: 'c', text: 'Only buying needs' }], correctAnswer: 'b', explanation: 'Impulse buying is purchasing without thinking — it can waste money.' },
        hard: { question: 'What is "opportunity cost"?', options: [{ id: 'a', text: 'The cost of missed opportunities from a choice' }, { id: 'b', text: 'Free things' }, { id: 'c', text: 'Sale prices' }], correctAnswer: 'a', explanation: 'Opportunity cost is what you give up when you choose one thing over another.' },
      }},
      { type: 'true-false', variants: {
        easy: { question: 'It\'s smart to think before buying things.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'Thinking before buying helps you spend wisely.' },
        medium: { question: 'The cheapest option is always the best value.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'Quality matters too — sometimes paying more gets you something that lasts longer.' },
        hard: { question: 'Comparison shopping can save you significant money over time.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'Comparing prices before buying helps you find the best deals.' },
      }},
    ],
  },
  {
    id: 'smart-spending-1', trackId: 'smart-spending', index: 1,
    title: 'Advertising Tricks', description: 'How ads try to make you spend', xpReward: 20,
    screens: [
      { type: 'content', title: 'Ad Alert!', body: 'Advertisements are everywhere — TV, YouTube, social media, shops. Their job is to make you want to buy things. They use tricks like "LIMITED TIME ONLY!", celebrity endorsements, and bright colours. Understanding these tricks makes you a smarter spender!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'Why do companies advertise?', options: [{ id: 'a', text: 'To help you save money' }, { id: 'b', text: 'To make you want to buy their products' }, { id: 'c', text: 'For fun' }], correctAnswer: 'b', explanation: 'Ads are designed to make you want to spend money.' },
        medium: { question: 'Which is an advertising trick?', options: [{ id: 'a', text: 'Showing the real price clearly' }, { id: 'b', text: 'Using "BUY NOW — LIMITED TIME!" urgency' }, { id: 'c', text: 'Being completely honest about the product' }], correctAnswer: 'b', explanation: 'Creating urgency is a common advertising trick.' },
        hard: { question: 'What is "social proof" in marketing?', options: [{ id: 'a', text: 'Using reviews and popularity to influence buying' }, { id: 'b', text: 'Proving the product works scientifically' }, { id: 'c', text: 'Social media advertising' }], correctAnswer: 'a', explanation: 'Social proof uses others\' behaviour (reviews, bestseller tags) to influence your choices.' },
      }},
      { type: 'tap-match', variants: {
        easy: { question: 'Match the ad trick!', matchPairs: [{ left: 'BUY NOW!', right: 'Creating urgency' }, { left: 'Celebrity photo', right: 'Star power' }, { left: 'Bright colours', right: 'Catching attention' }], explanation: 'Recognising these tricks helps you resist them!' },
        medium: { question: 'Match advertising techniques.', matchPairs: [{ left: 'Scarcity', right: '"Only 3 left!"' }, { left: 'Bandwagon', right: '"Everyone\'s buying it!"' }, { left: 'Anchoring', right: 'Showing a high "was" price' }], explanation: 'These psychological techniques influence spending decisions.' },
        hard: { question: 'Match advanced marketing concepts.', matchPairs: [{ left: 'Loss aversion', right: '"Don\'t miss out!"' }, { left: 'Anchoring bias', right: 'Comparing to expensive option first' }, { left: 'Decoy effect', right: 'Adding option to make another look better' }], explanation: 'Marketers use cognitive biases to influence purchasing.' },
      }},
    ],
  },
  {
    id: 'smart-spending-2', trackId: 'smart-spending', index: 2,
    title: 'Getting Value', description: 'Finding the best deals', xpReward: 20,
    screens: [
      { type: 'content', title: 'Value for Money', body: 'Getting value for money means making sure what you buy is worth the price. Compare prices, read reviews, and think about how long something will last. Sometimes waiting for a sale can save you lots of money!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'How can you get better value for money?', options: [{ id: 'a', text: 'Buy the first thing you see' }, { id: 'b', text: 'Compare prices at different shops' }, { id: 'c', text: 'Always buy the most expensive' }], correctAnswer: 'b', explanation: 'Comparing prices helps you find the best deal!' },
        medium: { question: 'A game costs £40 now or £25 in a sale next month. What saves more?', options: [{ id: 'a', text: 'Buying now' }, { id: 'b', text: 'Waiting for the sale' }, { id: 'c', text: 'They cost the same' }], correctAnswer: 'b', explanation: 'Waiting saves you £15!' },
        hard: { question: 'What is "cost per use"?', options: [{ id: 'a', text: 'The total price of an item' }, { id: 'b', text: 'Price divided by number of times you use it' }, { id: 'c', text: 'The cost of returning an item' }], correctAnswer: 'b', explanation: 'A £60 jacket worn 60 times = £1 per use — great value!' },
      }},
      { type: 'fill-blank', variants: {
        easy: { question: 'Comparing ___ helps you find the best deal.', options: [{ id: 'a', text: 'colours' }, { id: 'b', text: 'prices' }, { id: 'c', text: 'sizes' }], correctAnswer: 'b', explanation: 'Comparing prices is smart shopping!' },
        medium: { question: 'Waiting for a ___ can save you money on purchases.', options: [{ id: 'a', text: 'sale' }, { id: 'b', text: 'bus' }, { id: 'c', text: 'friend' }], correctAnswer: 'a', explanation: 'Sales offer discounts on regular prices.' },
        hard: { question: 'The total cost of owning something over time is called the "cost of ___."', options: [{ id: 'a', text: 'living' }, { id: 'b', text: 'ownership' }, { id: 'c', text: 'goods' }], correctAnswer: 'b', explanation: 'Cost of ownership includes purchase price, maintenance, and running costs.' },
      }},
    ],
  },
];

// ═══════════════════════════════════════════
// INVESTING (3 lessons)
// ═══════════════════════════════════════════
const investingLessons: Lesson[] = [
  {
    id: 'investing-0', trackId: 'investing', index: 0,
    title: 'What is Investing?', description: 'Introduction to growing your money', xpReward: 20,
    screens: [
      { type: 'content', title: 'Growing Your Money', body: 'Investing means putting your money into something that can grow in value over time. Unlike saving in a bank, investing can earn you more money — but it also comes with risk. The key idea: the longer you invest, the more your money can grow!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What is investing?', options: [{ id: 'a', text: 'Spending money on sweets' }, { id: 'b', text: 'Putting money into something that can grow' }, { id: 'c', text: 'Hiding money under a mattress' }], correctAnswer: 'b', explanation: 'Investing helps your money grow over time!' },
        medium: { question: 'What is the main difference between saving and investing?', options: [{ id: 'a', text: 'Investing has more potential growth but more risk' }, { id: 'b', text: 'Saving is always better' }, { id: 'c', text: 'They\'re exactly the same' }], correctAnswer: 'a', explanation: 'Investing can grow faster but has more risk than saving.' },
        hard: { question: 'What does "risk vs reward" mean in investing?', options: [{ id: 'a', text: 'Higher potential returns usually come with higher risk' }, { id: 'b', text: 'There\'s no risk in investing' }, { id: 'c', text: 'Low risk always means low reward' }], correctAnswer: 'a', explanation: 'Generally, investments with higher potential returns carry higher risk.' },
      }},
      { type: 'true-false', variants: {
        easy: { question: 'Investing can help your money grow over time.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'That\'s the goal of investing!' },
        medium: { question: 'Investing always guarantees you\'ll make money.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'false', explanation: 'Investments can go down as well as up — there\'s always risk.' },
        hard: { question: 'Historically, stock markets have trended upward over long periods.', options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }], correctAnswer: 'true', explanation: 'Over long periods (decades), stock markets have historically grown, despite short-term dips.' },
      }},
    ],
  },
  {
    id: 'investing-1', trackId: 'investing', index: 1,
    title: 'Compound Interest', description: 'The magic of compound growth', xpReward: 20,
    screens: [
      { type: 'content', title: 'The Magic of Compounding', body: 'Compound interest is when you earn interest on your interest. Einstein supposedly called it the eighth wonder of the world! If you invest £100 at 10% interest, after year 1 you have £110. After year 2, you earn 10% on £110, giving you £121 — not just £120!' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What is compound interest?', options: [{ id: 'a', text: 'Interest on a single pound' }, { id: 'b', text: 'Earning interest on your interest' }, { id: 'c', text: 'Paying interest to a bank' }], correctAnswer: 'b', explanation: 'Compound interest means your interest earns more interest!' },
        medium: { question: '£100 at 10% compound interest for 2 years equals?', options: [{ id: 'a', text: '£120' }, { id: 'b', text: '£121' }, { id: 'c', text: '£110' }], correctAnswer: 'b', explanation: 'Year 1: £110, Year 2: £110 + 10% = £121.' },
        hard: { question: 'The "Rule of 72" estimates how many years to double your money. At 6% interest, approximately how long?', options: [{ id: 'a', text: '6 years' }, { id: 'b', text: '12 years' }, { id: 'c', text: '18 years' }], correctAnswer: 'b', explanation: '72 ÷ 6 = 12 years to double your money at 6% interest.' },
      }},
      { type: 'fill-blank', variants: {
        easy: { question: 'Compound interest earns interest on your ___.', options: [{ id: 'a', text: 'interest' }, { id: 'b', text: 'pocket' }, { id: 'c', text: 'piggy bank' }], correctAnswer: 'a', explanation: 'That\'s what makes it so powerful!' },
        medium: { question: 'Starting to invest ___ gives compound interest more time to work.', options: [{ id: 'a', text: 'late' }, { id: 'b', text: 'early' }, { id: 'c', text: 'never' }], correctAnswer: 'b', explanation: 'The earlier you start, the more time for compounding.' },
        hard: { question: 'The Rule of ___ helps estimate how long to double your investment.', options: [{ id: 'a', text: '72' }, { id: 'b', text: '100' }, { id: 'c', text: '50' }], correctAnswer: 'a', explanation: 'Divide 72 by your interest rate to find doubling time.' },
      }},
    ],
  },
  {
    id: 'investing-2', trackId: 'investing', index: 2,
    title: 'Stocks Basics', description: 'Understanding the stock market', xpReward: 20,
    screens: [
      { type: 'content', title: 'What are Stocks?', body: 'When you buy a stock (or "share"), you own a tiny piece of a company! If the company does well, your share becomes worth more. Companies like Apple, Tesco, and Unilever all have shares you can buy. The London Stock Exchange is where UK shares are traded.' },
      { type: 'multiple-choice', variants: {
        easy: { question: 'What do you own when you buy a stock?', options: [{ id: 'a', text: 'The whole company' }, { id: 'b', text: 'A tiny piece of a company' }, { id: 'c', text: 'Nothing' }], correctAnswer: 'b', explanation: 'Each share is a small piece of ownership!' },
        medium: { question: 'Why might a stock\'s price go up?', options: [{ id: 'a', text: 'The company is losing money' }, { id: 'b', text: 'The company is doing well and growing' }, { id: 'c', text: 'The weather is nice' }], correctAnswer: 'b', explanation: 'When companies perform well, their share price tends to rise.' },
        hard: { question: 'What is a "dividend"?', options: [{ id: 'a', text: 'A fee for buying stocks' }, { id: 'b', text: 'A share of company profits paid to shareholders' }, { id: 'c', text: 'A type of stock' }], correctAnswer: 'b', explanation: 'Dividends are portions of profit paid to shareholders.' },
      }},
      { type: 'tap-match', variants: {
        easy: { question: 'Match investing words!', matchPairs: [{ left: 'Stock', right: 'Piece of a company' }, { left: 'Investor', right: 'Person who invests' }, { left: 'Profit', right: 'Money earned' }], explanation: 'Great matching!' },
        medium: { question: 'Match stock market terms.', matchPairs: [{ left: 'Bull market', right: 'Prices rising' }, { left: 'Bear market', right: 'Prices falling' }, { left: 'Dividend', right: 'Company profit shared' }], explanation: 'Bulls charge up, bears swipe down — that\'s how to remember!' },
        hard: { question: 'Match investment types.', matchPairs: [{ left: 'Shares', right: 'Ownership in companies' }, { left: 'Bonds', right: 'Lending to governments/companies' }, { left: 'Index fund', right: 'Basket of many stocks' }], explanation: 'Diversifying across types reduces risk.' },
      }},
    ],
  },
];

// ═══════════════════════════════════════════
// COMBINED & HELPERS
// ═══════════════════════════════════════════
export const ALL_LESSONS: Lesson[] = [
  ...moneyBasicsLessons,
  ...savingBudgetingLessons,
  ...earningLessons,
  ...smartSpendingLessons,
  ...investingLessons,
];

export function getLessonById(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}

export function getLessonsByTrack(trackId: TrackId | string): Lesson[] {
  return ALL_LESSONS.filter((l) => l.trackId === trackId);
}
