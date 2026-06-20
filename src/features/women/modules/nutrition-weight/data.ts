"use client";
import { t } from "@/features/women/lib/i18n-utils";
import { type ModuleContent } from "@/features/women/data/modules";

export const nutritionWeightData: ModuleContent = {
  slug: "nutrition-weight",
  title: t("title", "Nutrition & Weight"),
  subtitle: t("subtitle", "Tailored nutrition plans and weight management support for better health."),
  iconKey: "Salad",
  tone: "peach",
  understanding: [
    {
      label: t("understanding.0.label", "Why is nutrition important?"),
      tone: "peach",
      body: [
        t("understanding.0.body.0", "Food is information. Every meal sends signals to your hormones, immune system, brain, gut, and muscles. The same body that feels foggy and depleted on one set of meals can feel clear and resilient on another, without changing anything else."),
        t("understanding.0.body.1", "What you eat shapes how you feel within hours (energy, mood, focus, cravings) and how you function over decades (heart, bones, brain, hormones, cancer risk). Both timescales matter, and both respond to the same basic principles."),
        t("understanding.0.body.2", "Women have higher demands for iron, calcium, vitamin D, B12, folate, omega-3s, and protein at almost every life stage. Menstruation, pregnancy, breastfeeding, and menopause each shift the math, and 'standard' nutrition advice often underestimates what you actually need."),
        t("understanding.0.body.3", "Skipping these silently shows up as fatigue, hair shedding, mood dips, weak workouts, irregular cycles, brittle nails, anxiety, and poor recovery from illness. Many women live with low-grade deficiencies for years, blaming stress when the real issue is fuel."),
        t("understanding.0.body.4", "Nutrition interacts with stress, sleep, and movement in both directions. Poor sleep raises cravings; chronic stress changes how nutrients are absorbed; under-eating drains the energy you'd need to work out. You can't fix one without addressing the others."),
        t("understanding.0.body.5", "Think 'add' before 'subtract.' Adding protein, fiber, color, water, and healthy fat naturally crowds out the foods that drain you, without the rebound that restriction creates. Most sustainable nutrition shifts are additive, not punitive."),
        t("understanding.0.body.6", "Diet culture has done real damage. Decades of restriction, calorie counting, and moralizing food ('clean,' 'cheat,' 'good,' 'bad') have left many women anxious about eating itself. Healing your relationship with food is part of nutrition, not separate from it."),
        t("understanding.0.body.7", "Nutrition is meant to support your life, not control it. If your eating plan is making you obsessive, isolated, or miserable, it's not working, no matter how 'clean' it looks on paper.")
      ]
    },
    {
      label: t("understanding.1.label", "Balanced Diet"),
      tone: "blue",
      body: [
        t("understanding.1.body.0", "A balanced plate is roughly half vegetables and fruit, a quarter protein, a quarter whole carbs, plus a thumb of healthy fat. This shape works at almost every life stage and adapts easily to most cultural cuisines and budgets."),
        t("understanding.1.body.1", "Protein is the most underrated piece for women, aim for 25–35g per meal, ideally 100–130g per day if you're active or in perimenopause/menopause. Eggs, fish, chicken, Greek yogurt, cottage cheese, tofu, tempeh, lentils, beans, and protein-rich grains like quinoa all count."),
        t("understanding.1.body.2", "Carbs are not the enemy. Whole carbs (oats, rice, potatoes, fruit, legumes, whole-grain bread and pasta) fuel your brain, workouts, hormones, and thyroid. Chronic low-carb eating can suppress cycles and tank energy in active women."),
        t("understanding.1.body.3", "Healthy fats are essential for hormones, brain, hair, skin, and vitamin absorption. Olive oil, avocado, nuts, seeds, fatty fish (salmon, sardines, mackerel), and yogurt are reliable sources. Fat-free diets are quietly hard on hormones."),
        t("understanding.1.body.4", "Fiber is a quiet hero, 25–35g per day supports gut bacteria, blood sugar, cholesterol, hormone clearance, and satiety. Most adults get less than half this amount."),
        t("understanding.1.body.5", "Hydration matters, most adults need 2–3 liters a day, more in heat or with exercise. Mild dehydration looks a lot like fatigue, headaches, and brain fog."),
        t("understanding.1.body.6", "Variety matters as much as the shape. Aim for 30 different plant foods per week (vegetables, fruit, herbs, spices, nuts, seeds, legumes, whole grains all count). Gut diversity follows plant diversity."),
        t("understanding.1.body.7", "Meal timing is mostly individual, find what works for you. Three meals plus a snack works for most; some prefer four smaller meals; some do well with longer fasting windows. The 'right' rhythm is the one that keeps you energized and stable."),
        t("understanding.1.body.8", "Plan a little, not a lot. Stocking the kitchen with proteins, easy carbs, frozen vegetables, fruit, and pantry staples makes balanced eating the default rather than the exception.")
      ]
    },
    {
      label: t("understanding.2.label", "Healthy Weight"),
      tone: "rose",
      body: [
        t("understanding.2.body.0", "A healthy weight is the one your body settles at when sleep, food, movement, and stress are steady. It's rarely a single number on a chart, it's a range your body defends, and that range is shaped by far more than calories."),
        t("understanding.2.body.1", "Body weight is shaped by genetics, hormones, age, medical conditions (PCOS, thyroid, insulin resistance), medications (antidepressants, hormonal contraception, steroids), sleep quality, stress load, and life stage. Treating weight as a willpower problem ignores most of the actual variables."),
        t("understanding.2.body.2", "Weight is one signal, not the signal. Energy, strength, sleep quality, mood, libido, lab markers (HbA1c, lipids, blood pressure), and how clothes fit tell a much fuller story than the scale alone. Many people get healthier without the scale moving much."),
        t("understanding.2.body.3", "Slow and supported weight change wins almost every time. Aggressive restriction triggers metabolic adaptation, muscle loss, hormone disruption, and rebound, usually leaving people heavier than they started within a few years. Sustainable change is boring on purpose."),
        t("understanding.2.body.4", "Protein and strength training are the two most underrated tools. Protein preserves muscle during weight loss; strength training keeps the metabolism resilient. Together they change body composition even when the scale moves slowly."),
        t("understanding.2.body.5", "Sleep controls weight more than most diets do. Sleep deprivation raises hunger hormones, lowers fullness signals, and amplifies cravings for sugar and refined carbs. A week of bad sleep can undo a month of careful eating."),
        t("understanding.2.body.6", "Stress matters too. Chronic cortisol changes where the body stores fat (often around the middle), drives emotional eating, and disrupts sleep, a full loop that has nothing to do with willpower."),
        t("understanding.2.body.7", "Hormonal life stages reshape weight. Perimenopause, postpartum, and post-pill transitions all temporarily shift weight regulation; understanding the stage is more useful than blaming yourself."),
        t("understanding.2.body.8", "Working with a registered dietitian or doctor (rather than a wellness influencer) is often the difference between progress and another failed attempt, especially if PCOS, thyroid issues, or disordered eating history are part of the picture."),
        t("understanding.2.body.9", "Weight is not a measure of worth, discipline, or value. People in larger bodies are not failed thin people; people in thin bodies are not automatically healthy. Health and weight overlap, but they're not the same thing.")
      ]
    },
    {
      label: t("understanding.3.label", "The Role of Nutrition"),
      tone: "mint",
      body: [
        t("understanding.3.body.0", "Nutrition shapes hormones, gut, brain, skin, immunity, sleep, mood, fertility, and metabolism. There is almost no body system that food doesn't touch, which is why the right adjustments often improve several things at once."),
        t("understanding.3.body.1", "Hormonal health depends on steady nutrition. Skipped meals, very low calorie days, and chronic under-eating signal scarcity to the body, which can suppress thyroid, slow metabolism, and quiet cycles. Hormones need fuel."),
        t("understanding.3.body.2", "Gut and nutrition are inseparable. Aim for 30 different plants per week, plenty of fiber, fermented foods (yogurt, kefir, sauerkraut, kimchi), and minimal ultra-processed food. A healthy gut affects mood, immunity, hormone clearance, and inflammation."),
        t("understanding.3.body.3", "Mental health and nutrition are deeply linked. Omega-3s, B vitamins, iron, vitamin D, magnesium, and stable blood sugar all influence anxiety and depression. Nutrition is not a substitute for therapy or medication, but it's a powerful partner to both."),
        t("understanding.3.body.4", "Skin, hair, and nails are slow-feedback signals of nutrition status. Brittle nails, hair shedding, dull skin, and slow-healing breakouts often improve dramatically when protein, iron, zinc, and healthy fats are restored."),
        t("understanding.3.body.5", "Nutrition is a powerful partner to medication and movement. Many medications work better when paired with steady eating; many workouts pay off more with adequate fuel. Trying to out-train or out-medicate poor nutrition rarely works."),
        t("understanding.3.body.6", "Across life stages, needs shift. Pregnancy and breastfeeding raise demands sharply; perimenopause shifts protein and calcium needs upward; postmenopause emphasizes bone and muscle support. The plate evolves with the chapter."),
        t("understanding.3.body.7", "Avoid the extremes. Cutting out entire food groups without medical reason often backfires; so does eating whatever, whenever, with no structure. The middle, varied, regular, mostly whole foods, with room for pleasure, is where most people thrive."),
        t("understanding.3.body.8", "Cooking even a few times a week is one of the highest-leverage nutrition habits. You don't need to be a great cook; you need a small rotation of meals you can make on autopilot."),
        t("understanding.3.body.9", "Start small. One steady habit changed (a protein-forward breakfast, a piece of fruit at lunch, a glass of water before coffee) becomes a different body over time. Compound interest works for nutrition too.")
      ]
    }
  ],
  articles: [
    {
      title: t("articles.0.title", "The plate, simplified"),
      summary: t("articles.0.summary", "Half veggies, a quarter protein, a quarter whole grains. No app required."),
      body: [
        t("articles.0.body.0", "If nutrition advice has become overwhelming, the simplest, most effective tool is the plate. You don't need an app, a scale, or a degree in nutrition. You need a shape your eye can recognize."),
        t("articles.0.body.1", "Picture your plate divided into rough sections. Half is vegetables and fruit, color, fiber, water, micronutrients. A quarter is protein, eggs, fish, chicken, paneer, tofu, lentils, beans. A quarter is whole carbs, rice, oats, potatoes, bread, pasta, millet. Add a thumb-sized portion of healthy fat, olive oil, nuts, seeds, avocado."),
        t("articles.0.body.2", "This shape stabilizes blood sugar, supports muscle, keeps you full for hours, and naturally provides most of the nutrients you need. You don't have to weigh anything or count grams."),
        t("articles.0.body.3", "Build it in any cuisine. Indian: dal, rice, sabzi, raita, salad. Mediterranean: chicken, quinoa, roasted vegetables, olive oil. Asian: tofu, brown rice, stir-fried greens. The shape adapts; the principle stays."),
        t("articles.0.body.4", "Three plates like this a day, plus a snack or two if needed, covers most people's nutritional needs comfortably."),
        t("articles.0.body.5", "If a meal is missing the protein piece, you'll likely feel hungry again within an hour or two. If it's missing the vegetables, you'll be lower in fiber and micronutrients than you realize over time."),
        t("articles.0.body.6", "You don't have to do this perfectly. Most days, most meals, in this shape. That's enough.")
      ]
    },
    {
      title: t("articles.1.title", "Hunger isn't the enemy"),
      summary: t("articles.1.summary", "Restriction backfires. Eating enough during the day is the most underrated tool."),
      body: [
        t("articles.1.body.0", "One of the most common patterns in women's nutrition is undereating during the day and overeating at night. It looks disciplined; it's actually a setup for failure."),
        t("articles.1.body.1", "When you skip breakfast, eat a tiny lunch, and 'save' calories for dinner, your blood sugar crashes by mid-afternoon, your willpower thins by evening, and the body, wisely, drives you toward fast carbs and sugar."),
        t("articles.1.body.2", "This isn't a moral failing. It's biology. The body wants energy when it needs energy. Restriction during the day reliably triggers overeating at night."),
        t("articles.1.body.3", "The fix is counterintuitive: eat more, earlier. A real breakfast with protein. A satisfying lunch. A balanced dinner. Snacks if you actually need them."),
        t("articles.1.body.4", "Most women undereat protein and overestimate how much they're eating. 25–35g per main meal is a useful target, that's two eggs plus yogurt at breakfast, a palm of paneer or chicken at lunch and dinner."),
        t("articles.1.body.5", "Eating enough protects muscle, hormones, mood, sleep, and a sustainable relationship with food."),
        t("articles.1.body.6", "If you've been chronically undereating, your hunger and fullness signals may be muffled. They return with consistent, satisfying meals, usually within a few weeks."),
        t("articles.1.body.7", "Hunger is a signal, not the enemy. Listen to it earlier in the day, and the cravings later in the day shrink on their own.")
      ]
    },
    {
      title: t("articles.2.title", "Strength is the new cardio"),
      summary: t("articles.2.summary", "Muscle drives metabolism, two short sessions a week change everything."),
      body: [
        t("articles.2.body.0", "For decades, women were sold cardio as the answer to everything. The result is a generation that runs more, eats less, and stays stuck in a body that doesn't change. The missing piece is muscle."),
        t("articles.2.body.1", "Muscle is the most metabolically active tissue in the body. It burns calories at rest, uses up blood sugar, supports hormones, protects your bones, and shapes your body composition more than any diet."),
        t("articles.2.body.2", "Two short strength sessions a week, even 20–30 minutes with bodyweight, dumbbells, or resistance bands, meaningfully change body composition over months. The scale may move slowly, but how your body looks and feels changes faster."),
        t("articles.2.body.3", "You don't need a gym. Squats, lunges, push-ups, rows with a band, and planks cover most of the body. Three rounds of 8–12 reps, twice a week, is a powerful start."),
        t("articles.2.body.4", "Strength training also improves insulin sensitivity for up to 48 hours per session, lowers anxiety, supports sleep, protects bone density, and reduces fall risk later in life. Few things in health science are this consistently good for you."),
        t("articles.2.body.5", "Cardio still matters, for heart health, mood, and endurance. But it's a complement, not the foundation. Walking, dancing, swimming, hiking, gentle daily movement plus structured strength is the winning formula."),
        t("articles.2.body.6", "If you're starting from zero, start very small. A bodyweight session at home. A YouTube beginner. A short class. Consistency beats intensity every single time.")
      ]
    },
    {
      title: t("articles.3.title", "Eating for hormonal health"),
      summary: t("articles.3.summary", "Specific nutrients support cycles, energy, and mood."),
      body: [
        t("articles.3.body.0", "Nutrition and hormones are inseparable. Hormones are built from cholesterol and proteins, regulated by blood sugar, and supported by a handful of key micronutrients. Get the foundations right and many hormonal symptoms ease."),
        t("articles.3.body.1", "Protein is foundational. 25–35g per meal supports muscle, mood, hair, and the building blocks of hormones. Spread it across the day rather than loading dinner."),
        t("articles.3.body.2", "Healthy fats, olive oil, nuts, seeds, avocado, fatty fish, support hormone production directly. Very low-fat diets often quietly disrupt cycles and mood."),
        t("articles.3.body.3", "Fiber helps your body clear used estrogen. 25–30g a day from vegetables, fruit, beans, lentils, and whole grains keeps hormones moving in healthy patterns."),
        t("articles.3.body.4", "Specific nutrients matter. Iron (often low in menstruating women) supports energy. Magnesium helps with PMS, sleep, and muscle relaxation. Zinc supports skin and ovulation. Omega-3s reduce inflammation. Vitamin D supports mood, bones, and immune function."),
        t("articles.3.body.5", "Steady blood sugar is one of the most powerful hormonal tools. Pair carbs with protein and fat. Avoid going long stretches running on empty. Walk after meals."),
        t("articles.3.body.6", "Limit alcohol, it raises estrogen, disrupts sleep, and worsens PMS for many."),
        t("articles.3.body.7", "And keep food enjoyable. Stress about eating perfectly can disrupt hormones as much as actual nutritional gaps. Build a steady pattern, then enjoy your life.")
      ]
    }
  ],
  tips: [
    t("tips.0", "Eat protein at every meal, aim for a palm-sized portion."),
    t("tips.1", "Drink water before reaching for a snack."),
    t("tips.2", "Don't skip breakfast on workout days."),
    t("tips.3", "Make veggies the easiest food in your fridge to grab."),
    t("tips.4", "Sleep 7+ hours, it controls hunger hormones."),
    t("tips.5", "Aim for 30 different plant foods per week."),
    t("tips.6", "Cook once, eat twice, leftovers save weeknights."),
    t("tips.7", "Limit alcohol, it disrupts sleep and hunger signals."),
    t("tips.8", "Walk 10 minutes after your largest meal."),
    t("tips.9", "Add fermented foods (yogurt, kimchi, kefir) for gut health."),
    t("tips.10", "Supplement vitamin D if you're rarely outdoors."),
    t("tips.11", "Don't drink your calories, whole fruit beats juice.")
  ],
  stories: [
    {
      name: t("stories.0.name", "Ria, 29"),
      quote: t("stories.0.quote", "I stopped counting calories and started counting protein grams. My energy doubled."),
      body: [
        t("stories.0.body.0", "I spent most of my twenties on some version of 'eat less.' Calorie counting apps, low-fat everything, salad lunches. I was hungry constantly and convinced I was just bad at it."),
        t("stories.0.body.1", "A nutritionist looked at my food log and said one thing: 'You're eating about 40 grams of protein a day. Try doubling it.'"),
        t("stories.0.body.2", "It felt counterintuitive. I added eggs to breakfast, a Greek yogurt as a snack, an extra portion of dal at lunch, fish or paneer at dinner."),
        t("stories.0.body.3", "Within two weeks, my afternoon crashes were gone. My workouts felt stronger. The constant cravings I had blamed on no willpower simply quieted."),
        t("stories.0.body.4", "My weight didn't change much in those first weeks. But my body composition slowly did. More than that, my relationship with food shifted from restriction to nourishment."),
        t("stories.0.body.5", "Now I count protein, not calories. It's the single most useful change I've ever made.")
      ]
    },
    {
      name: t("stories.1.name", "Dee, 38"),
      quote: t("stories.1.quote", "Cooking once and eating twice freed up my whole week."),
      body: [
        t("stories.1.body.0", "I was drowning in the daily 'what's for dinner' question. Two kids, full-time work, and an impossibly long mental load. Most weeknights ended in takeout and guilt."),
        t("stories.1.body.1", "I tried meal prepping the way Instagram showed it, five identical containers, perfectly portioned. I hated it by Wednesday."),
        t("stories.1.body.2", "Then a friend suggested 'cook once, eat twice.' Make one big thing every other day, eat half tonight, half tomorrow. Vary the sides."),
        t("stories.1.body.3", "It changed my week. Sunday: roast chicken + veg, half eaten that night, half shredded into a wrap on Monday. Tuesday: a big pot of dal, eaten with rice that night and over toast for breakfast Wednesday."),
        t("stories.1.body.4", "My evenings opened up. We ate better. I stopped ordering in three nights a week."),
        t("stories.1.body.5", "I don't meal prep elaborately. I just cook generously. That small shift saved my sanity.")
      ]
    },
    {
      name: t("stories.2.name", "Sana, 33"),
      quote: t("stories.2.quote", "I gave up dieting and gained my life back."),
      body: [
        t("stories.2.body.0", "I dieted in some form from age 15 to 30. Atkins, low-fat, low-carb, intermittent fasting, juice cleanses. Every plan ended in a binge and a heavier weight than I started."),
        t("stories.2.body.1", "At 30, exhausted, I went to a registered dietitian, not for a plan, but for help getting off plans. She asked me what I actually liked to eat. I cried because I didn't really know anymore."),
        t("stories.2.body.2", "We worked on the basics: regular meals, enough protein, vegetables I enjoyed, foods from my culture, no banned foods. No tracking. No rules."),
        t("stories.2.body.3", "The first year was uncomfortable. My weight fluctuated. My head was loud. Slowly, my body found its own settling point, and it was a healthier weight than my dieting weight had ever been long-term."),
        t("stories.2.body.4", "Three years on, I don't think about food the way I used to. I eat when hungry. I stop when full. I enjoy meals. The freedom is worth more than any number on a scale.")
      ]
    },
    {
      name: t("stories.3.name", "Meera, 41"),
      quote: t("stories.3.quote", "Strength training in my 40s gave me a body I actually trust."),
      body: [
        t("stories.3.body.0", "I had never lifted weights until I turned 40. I had run, done yoga, gone to spin classes, but lifting felt like 'not for me.'"),
        t("stories.3.body.1", "A physiotherapist told me, after a back injury, that the strongest thing I could do for my future was build muscle. So I started, reluctantly."),
        t("stories.3.body.2", "Two sessions a week with a coach. 30 minutes each. Mostly bodyweight at first."),
        t("stories.3.body.3", "Within three months, my back pain was gone. Within six months, I could carry my groceries up three flights without thinking about it."),
        t("stories.3.body.4", "My body looks different now, not smaller, but stronger. My posture changed. My energy lifted. I sleep better."),
        t("stories.3.body.5", "I tell every woman in her 40s: it is not too late. Two short sessions a week. That's all it takes to start changing the next 30 years of your life.")
      ]
    }
  ],
  myths: [
    { myth: t("myths.0.myth", "Carbs make you gain weight."), fact: t("myths.0.fact", "Excess calories do, from any source. Whole carbs fuel your brain and workouts.") },
    { myth: t("myths.1.myth", "Eating late causes weight gain."), fact: t("myths.1.fact", "Total daily intake matters more than timing.") },
    { myth: t("myths.2.myth", "Detoxes clean your body."), fact: t("myths.2.fact", "Your liver and kidneys already do that, beautifully.") },
    { myth: t("myths.3.myth", "Fat makes you fat."), fact: t("myths.3.fact", "Healthy fats support hormones, brain, and satiety. Don't fear olive oil, nuts, or avocado.") },
    { myth: t("myths.4.myth", "Skipping meals helps you lose weight."), fact: t("myths.4.fact", "It often backfires, leading to overeating and slower metabolism.") },
    { myth: t("myths.5.myth", "All calories are equal."), fact: t("myths.5.fact", "Quality matters. 200 calories of broccoli and 200 of soda affect your body very differently.") },
    { myth: t("myths.6.myth", "You need supplements to be healthy."), fact: t("myths.6.fact", "Most nutrients are best absorbed from food. Supplement only what's measured to be low.") },
    { myth: t("myths.7.myth", "Women shouldn't lift heavy."), fact: t("myths.7.fact", "Lifting heavy builds bone, muscle, and confidence. It doesn't make you 'bulky'.") },
    { myth: t("myths.8.myth", "Snacking always sabotages weight loss."), fact: t("myths.8.fact", "A protein-rich snack can prevent overeating later. Quality matters more than frequency.") },
    { myth: t("myths.9.myth", "You have to earn your food with exercise."), fact: t("myths.9.fact", "Food is fuel and pleasure, not punishment or reward.") }
  ]
};
