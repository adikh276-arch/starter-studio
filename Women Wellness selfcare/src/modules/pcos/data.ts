"use client";
import { t } from "@/lib/i18n-utils";
import { type ModuleContent } from "@/data/modules";

export const pcosData: ModuleContent = {
  slug: "pcos",
  title: t("title", "PCOS"),
  iconKey: "Flower",
  tone: "pink",

  subtitle: t("subtitle", "Personalized care and guidance to manage PCOS symptoms effectively."),


  understanding: [
    { label: t("understanding.0.label", "Basic Guide"), tone: "peach", body: [
      t("understanding.0.body.0", "Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal conditions in the world, affecting roughly 1 in 10 people with ovaries. Despite the name, PCOS isn't really about cysts at all, it's about a cluster of hormonal imbalances that can show up very differently from one body to another."),
      t("understanding.0.body.1", "The three classic features doctors look for are irregular or absent periods, signs of higher androgen activity (such as acne, oily skin, scalp hair thinning, or unwanted hair growth on the face, chest, or back), and ovaries that look polycystic on an ultrasound. You only need two of these three to be diagnosed, which is part of why two people with the same diagnosis can have completely different stories."),
      t("understanding.0.body.2", "Underneath these visible signs, there are usually two quieter drivers: insulin resistance and chronic low-grade inflammation. Insulin resistance means your body has to make more insulin than usual to keep blood sugar steady, and that extra insulin nudges the ovaries to make more androgens. Inflammation amplifies the whole loop, which is why so many people with PCOS also notice fatigue, brain fog, joint stiffness, and skin flare-ups that don't seem connected on the surface."),
      t("understanding.0.body.3", "PCOS isn't just a 'period problem.' Because hormones touch every system, it can also affect mood, energy, skin, hair, weight distribution, sleep, fertility, and long-term metabolic health. Many people first notice it in their late teens, but a sizable group don't get a clear diagnosis until their late twenties or thirties, often after years of being told that 'irregular periods are normal.'"),
      t("understanding.0.body.4", "The encouraging part is that PCOS is highly responsive to lifestyle. Steady meals built around protein and fiber, two or three short strength sessions a week, consistent sleep, and small daily stress outlets can ease most symptoms, sometimes within just a few cycles. Medications such as metformin, inositol, spironolactone, or hormonal contraception can also play a role, but they almost always work better stacked on top of the basics rather than replacing them."),
      t("understanding.0.body.5", "There's also no single 'PCOS diet' or 'PCOS workout' that fits everyone. The best plan is the one you can actually keep: foods you enjoy, movement you don't dread, and a routine that respects the rest of your life. Restrictive plans that promise fast fixes tend to backfire, raising cortisol and crashing energy in ways that make PCOS louder, not quieter."),
      t("understanding.0.body.6", "If you suspect PCOS, ask for a proper workup: a hormone panel (LH, FSH, total and free testosterone, DHEA-S, SHBG, prolactin), fasting insulin and glucose with HbA1c, a thyroid check, vitamin D, and a pelvic ultrasound. Naming what's happening is the first relief, and the doorway to a plan that actually fits you."),
      t("understanding.0.body.7", "Above all, PCOS is a long conversation, not a single decision. Symptoms shift across decades, and what helps in your twenties may need updating in your thirties or forties. The goal isn't to 'cure' PCOS but to live with it on terms that feel good, predictable cycles, steady energy, skin and hair you trust, and a body you no longer have to fight.")
    ]},

    { label: t("understanding.1.label", "PCOS Made Simple"), tone: "blue", body: [
      t("understanding.1.body.0", "If PCOS feels confusing, think of it as a communication issue between three players: your brain, your ovaries, and your insulin system. None of these parts is broken; they're just out of sync, and most of the work of managing PCOS is helping them hear each other again."),
      t("understanding.1.body.1", "When you eat, your body releases insulin to move sugar from blood into cells. In PCOS, cells respond more slowly, so the body releases extra insulin. That extra insulin signals the ovaries to make more androgens (like testosterone), which disrupts ovulation. No ovulation means irregular cycles, which feeds back into more imbalance, a quiet loop that runs in the background of daily life."),
      t("understanding.1.body.2", "This is why PCOS symptoms cluster the way they do. Acne, oily skin, hair changes, irregular periods, stubborn weight around the middle, and energy dips after meals all trace back to the same hormonal current, one underlying pattern showing up in different places. It also explains why treating any single symptom in isolation often disappoints; the underlying loop keeps turning."),
      t("understanding.1.body.3", "Stress and sleep are part of the loop too. Short or broken sleep raises cortisol, which raises insulin, which pushes androgens higher. A high-pressure week with bad sleep can flare PCOS symptoms even if your food and exercise haven't changed at all, useful information, not a personal failing."),
      t("understanding.1.body.4", "The simplest interventions work because they calm the whole loop at once: protein at every meal, a 10-minute walk after eating, lifting weights two or three times a week, and 7–9 hours of sleep. None of these are dramatic on their own, but stacked together they quietly reset insulin sensitivity in a way no single supplement can match."),
      t("understanding.1.body.5", "You don't need to do all of this perfectly. Even one or two of these habits, repeated most days, gently quiets the system. PCOS responds to consistency far more than intensity, and 'good enough most days' beats 'perfect for two weeks then nothing.'"),
      t("understanding.1.body.6", "It also helps to think in 90-day blocks rather than weekly check-ins. A new egg takes about three months to mature, so the work you do today shows up in the cycle three months from now. That lag is frustrating, but knowing it exists keeps you from giving up too early."),
      t("understanding.1.body.7", "Think of PCOS management less as a strict protocol and more as a long, kind conversation with your body, one where you learn its signals, respect its rhythms, and stop expecting it to behave like someone else's body.")
    ]},    { label: t("understanding.2.label", "What is PCOS?"), tone: "rose", body: [
      t("understanding.2.body.0", "PCOS is a lifelong endocrine condition in which the ovaries don't release eggs as regularly as they should. It usually shows up in the late teens or twenties, but many people aren't diagnosed until much later, often after years of irregular periods being dismissed, or after coming off the birth control pill and noticing that their cycle never quite came back."),
      t("understanding.2.body.1", "Symptoms vary enormously. The most common include missed or unpredictable periods, acne (especially along the jaw and chin), oily skin, hair thinning at the temples or crown, hair growth on the face, chest, or back, weight that's hard to shift around the middle, low energy, anxiety, mood changes, and difficulty conceiving."),
      t("understanding.2.body.2", "Diagnosis follows the Rotterdam criteria: irregular ovulation, signs of high androgens (clinically or on bloodwork), and polycystic-looking ovaries on ultrasound. Two out of three is enough, which is why PCOS can be diagnosed even with normal-looking ovaries, and why polycystic ovaries on a scan don't automatically mean PCOS."),
      t("understanding.2.body.3", "There are several recognized 'types', insulin-resistant (the most common), inflammatory, post-pill, and adrenal, and many people overlap more than one. Knowing which pattern dominates helps tailor the plan: insulin-resistant PCOS responds strongly to blood-sugar work, while adrenal PCOS responds more to stress and sleep work."),
      t("understanding.2.body.4", "PCOS is linked to higher risk of type 2 diabetes, gestational diabetes, high blood pressure, fatty liver, sleep apnea, endometrial changes from long gaps without periods, and certain mood conditions like anxiety and depression. None are guaranteed, but knowing the risks means you can stay ahead of them with regular screening rather than being caught off guard."),
      t("understanding.2.body.5", "PCOS is not your fault. It runs in families and is shaped by a mix of genetics, environment, and hormones, most of which you didn't choose. Decades of being told to 'just lose weight' have caused real harm to people with PCOS, and the science now clearly says the picture is far more complex than willpower."),
      t("understanding.2.body.6", "PCOS also doesn't mean infertility. Most people with PCOS who want children eventually have them, often with relatively simple support like cycle tracking, lifestyle changes, or ovulation-induction medication. It's a condition that needs planning, not a closed door."),
      t("understanding.2.body.7", "Naming PCOS removes a lot of shame. From there, the path forward is calmer: regular check-ins, a few core habits, the right specialists when needed, and a long view rather than a quick fix.")
    ]},
    { label: t("understanding.3.label", "Life Changing Tips"), tone: "mint", body: [
      t("understanding.3.body.0", "Start with the plate. Build meals around protein (25–35g per meal), then add fiber (vegetables, legumes, whole grains, fruit), then add healthy fats (olive oil, nuts, seeds, avocado, fatty fish). Carbs are welcome, just from whole sources, alongside the rest, rather than on their own."),
      t("understanding.3.body.1", "This one shift steadies blood sugar more than any supplement and means fewer cravings, fewer crashes, calmer skin, and over time more regular cycles. A protein-forward breakfast in particular sets the tone for the whole day's hormones."),
      t("understanding.3.body.2", "Move in ways that build muscle. Two or three short strength sessions a week, even 20–30 minutes, improve insulin sensitivity for hours afterward. Add a 10-minute walk after your largest meal to blunt blood-sugar spikes; this single habit is one of the most studied tools in PCOS care."),
      t("understanding.3.body.3", "Long, punishing cardio isn't required and can backfire by raising cortisol. Walking, strength training, yoga, pilates, and swimming are PCOS-friendly. The goal is movement you'll actually keep doing in five years, not movement that wrecks you in five weeks."),
      t("understanding.3.body.4", "Protect sleep like a prescription. Seven to nine hours, a consistent bedtime, a cool dark room, and a calm wind-down lower the cortisol that worsens PCOS. Even a single week of better sleep can noticebly reduce cravings and mood swings."),
      t("understanding.3.body.5", "Add small, repeatable stress outlets, a daily walk, breathwork, journaling, time outdoors, low-stakes hobbies. Five honest minutes a day beats one perfect hour a week. Cortisol is a real driver in PCOS, and lowering it changes how every other intervention lands."),
      t("understanding.3.body.6", "Layer in supportive supplements only after the basics: inositol (myo + d-chiro in a 40:1 ratio), vitamin D (if low), omega-3s, magnesium glycinate at night, and N-acetylcysteine have the most evidence. Talk to a clinician before stacking too many."),
      t("understanding.3.body.7", "Track your cycle. Even a simple log of period dates, mood, energy, sleep, and skin reveals patterns you'd otherwise miss, and gives any clinician far better information to work with."),
      t("understanding.3.body.8", "Be careful with the wellness internet. PCOS attracts a lot of fearmongering and expensive 'protocols.' If a plan tells you to cut out entire food groups, take 15 supplements, and never stop, be skeptical."),
      t("understanding.3.body.9", "Take the long view. PCOS rewards patience and consistency far more than intensity. The wins compound: better cycles, clearer skin, steadier energy, and a quieter relationship with your body.")
    ]},
  ],
  articles: [
    {
      title: t("articles.0.title", "Understanding your hormones"),
      summary: t("articles.0.summary", "How insulin, androgens, and small lifestyle shifts shape your cycle."),
      body: [
        t("articles.0.body.0", "PCOS is, at its heart, a conversation between three hormones: insulin, androgens (testosterone-like hormones), and the brain signals that drive ovulation. When that conversation gets noisy, periods become irregular, skin and hair change, and energy dips."),
        t("articles.0.body.1", "Insulin is the quiet conductor. In many people with PCOS, cells respond more slowly to it, so the pancreas releases more. That extra insulin tells the ovaries to make more androgens, which is why acne, oily skin, and hair changes so often arrive together with irregular cycles."),
        t("articles.0.body.2", "Androgens aren't villains. Everyone needs them. The issue is balance. When androgens are slightly elevated month after month, ovulation becomes inconsistent, and without ovulation the cycle loses its natural rhythm."),
        t("articles.0.body.3", "The brain matters too. The hypothalamus and pituitary send the signals (LH and FSH) that tell the ovaries what to do. In PCOS, the LH-to-FSH ratio is often skewed, which makes follicles start to develop but rarely finish, hence the 'polycystic' look on ultrasound."),
        t("articles.0.body.4", "The good news: this whole loop is sensitive to daily inputs. Steady protein at meals, walks after eating, strength training, sleep, and stress care directly lower insulin and quiet androgens. Many people see cycles improve within 2–3 months."),
        t("articles.0.body.5", "Medication can help where lifestyle isn't enough, metformin for insulin, inositol for both insulin and ovulation, the pill or progesterone for cycle regulation, and spironolactone for androgen-related skin and hair symptoms. Used together with daily basics, they work better than either alone."),
        t("articles.0.body.6", "Understanding your hormones turns PCOS from a mystery into a system you can work with. You don't need to fix everything at once, you need a few small, repeatable changes that calm the loop.")
      ]
    },
    {
      title: t("articles.1.title", "Eating for steady energy"),
      summary: t("articles.1.summary", "Pair carbs with protein and fiber to reduce cravings and breakouts."),
      body: [
        t("articles.1.body.0", "Energy crashes, sugar cravings, and afternoon brain fog are some of the most common day-to-day struggles in PCOS. Almost always, they trace back to one thing: blood sugar swings."),
        t("articles.1.body.1", "When you eat carbs alone, toast, biscuits, juice, sweetened coffee, blood sugar rises quickly and falls just as fast. The crash brings hunger, irritability, and another craving for something sweet. Repeated daily, this pattern keeps insulin elevated and PCOS symptoms loud."),
        t("articles.1.body.2", "The fix is simple and doesn't require giving up carbs. Pair every carb with protein and fiber. Toast becomes toast + eggs + tomato. Fruit becomes fruit + Greek yogurt + nuts. Rice becomes rice + dal + a vegetable side. The carb still comes in, but it arrives with brakes."),
        t("articles.1.body.3", "Aim for 25–35g of protein at each main meal. That's roughly two eggs plus a cup of yogurt at breakfast, a palm of paneer/chicken/fish/tofu at lunch and dinner. Most women undereat protein and overestimate how much they're getting."),
        t("articles.1.body.4", "Fiber is the second pillar. Vegetables, fruit (whole, not juiced), beans, lentils, and whole grains slow digestion, feed your gut, and help your body clear used hormones. 25–30g a day is a good target."),
        t("articles.1.body.5", "Fats are not the enemy. Olive oil, nuts, seeds, avocado, and fatty fish support hormone production and keep meals satisfying enough that you actually stay full."),
        t("articles.1.body.6", "A 10-minute walk after your biggest meal of the day is one of the most effective free tools for PCOS. Muscles soak up glucose during gentle movement, blunting the post-meal spike."),
        t("articles.1.body.7", "Steady eating beats perfect eating. Three balanced meals, eaten without rushing, do more for PCOS than any restrictive plan.")
      ]
    },
    {
      title: t("articles.2.title", "Movement that loves you back"),
      summary: t("articles.2.summary", "Strength training 2–3x/week beats long cardio for insulin sensitivity."),
      body: [
        t("articles.2.body.0", "For years, women with PCOS were told to do more cardio, eat less, and 'just lose weight.' That advice has aged badly. Long, intense cardio can raise cortisol, drive cravings, and worsen the very hormonal patterns it was meant to help."),
        t("articles.2.body.1", "Strength training is the more effective tool for most people with PCOS. Two or three sessions a week, even 20–30 minutes with bodyweight, dumbbells, or resistance bands, improves insulin sensitivity for up to 48 hours afterward. That means lower insulin, lower androgens, and a calmer cycle."),
        t("articles.2.body.2", "Building muscle also raises your resting metabolic rate, supports bone density, and changes body composition even when the scale doesn't move. Many people feel better, look stronger, and have more energy long before any weight changes."),
        t("articles.2.body.3", "You don't need a gym to start. Squats, lunges, push-ups (knee or full), rows with a band, and a basic plank cover most of the body. Three rounds of 8–12 reps, three days a week, is a powerful starting point."),
        t("articles.2.body.4", "Pair strength with daily walking. Aim for movement most days, a morning walk, post-meal strolls, taking stairs. Steps don't replace strength, but they multiply its effects."),
        t("articles.2.body.5", "Yoga, swimming, dancing, and gentle hikes are wonderful additions for stress, mobility, and joy. The best workout is the one you'll come back to next week."),
        t("articles.2.body.6", "If you've been pushing hard with little progress, the answer is usually less, not more, fewer punishing sessions, more strength, more rest, more sleep. PCOS responds to consistency, not intensity.")
      ]
    },
    {
      title: t("articles.3.title", "Sleep, stress and your cycle"),
      summary: t("articles.3.summary", "A consistent wind-down can be as powerful as supplements."),
      body: [
        t("articles.3.body.0", "Sleep is the most underrated PCOS treatment. A single short night raises cortisol the next day, which raises insulin, which nudges androgens up. Repeated week after week, this drives the very symptoms most people are trying to fix with food and movement alone."),
        t("articles.3.body.1", "Aim for 7–9 hours, on a roughly consistent schedule, in a cool, dark room. The consistency matters as much as the total, going to bed and waking at similar times trains your circadian rhythm, which steadies hormones across the cycle."),
        t("articles.3.body.2", "A simple wind-down routine helps more than any supplement. Dim the lights an hour before bed. Put the phone down 30 minutes earlier. Try a warm shower, light stretching, or reading. Caffeine after 2 p.m. and alcohol close to bed both quietly disrupt sleep quality even if you 'sleep through.'"),
        t("articles.3.body.3", "Stress is the other half of the equation. Chronic stress keeps cortisol elevated, which over time disrupts ovulation, worsens PMS, fuels cravings, and makes everything else harder."),
        t("articles.3.body.4", "You don't need a meditation practice or a retreat. Five minutes of slow breathing (4 seconds in, 6 seconds out), a daily walk outdoors, time with people who calm you, journaling, or a hobby, repeated daily, meaningfully lower stress hormones."),
        t("articles.3.body.5", "Watch for hidden stressors: under-eating, over-exercising, doomscrolling, and saying yes when you mean no. These quietly drain capacity even when life looks 'fine.'"),
        t("articles.3.body.6", "If sleep won't come or anxiety is constant, talk to a clinician. Sleep apnea is more common in PCOS than many realize, and treating it can transform energy, mood, and cycles. Therapy and, when appropriate, medication are also legitimate parts of PCOS care.")
      ]
    },
  ],
  tips: [
    t("tips.0", "Start the day with protein within an hour of waking."),
    t("tips.1", "Walk 10 minutes after meals to steady blood sugar."),
    t("tips.2", "Track your cycle, even irregular ones reveal patterns."),
    t("tips.3", "Swap refined sugar for whole fruit when cravings hit."),
    t("tips.4", "Prioritize 7–9 hours of sleep before any new supplement."),
    t("tips.5", "Lift weights 2–3 times a week, even short sessions count."),
    t("tips.6", "Add ground flaxseed (1–2 tbsp/day) for hormone support."),
    t("tips.7", "Cut back on alcohol, it worsens insulin resistance."),
    t("tips.8", "Get a full thyroid panel if symptoms persist."),
    t("tips.9", "Discuss inositol with a clinician familiar with PCOS."),
    t("tips.10", "Spend 10 minutes outdoors in morning sunlight daily."),
    t("tips.11", "Don't skip meals, it backfires for blood sugar."),
  ],
  stories: [
    {
      name: t("stories.0.name", "Maya, 28"),
      quote: t("stories.0.quote", "I stopped chasing perfect and started walking after dinner. Three months later, my period came back."),
      body: [
        t("stories.0.body.0", "I was diagnosed with PCOS at 24, and for almost four years I tried every plan I read about online, keto, intermittent fasting, low carb, no carb, juice cleanses. Nothing held. I'd start strong on a Monday and crash by Thursday."),
        t("stories.0.body.1", "My periods came maybe four times a year. My skin was inflamed. I was exhausted by 3 p.m. every day."),
        t("stories.0.body.2", "What finally changed wasn't a new diet. It was a 10-minute walk after dinner. My therapist suggested it as an anxiety habit, not a PCOS one. I just kept doing it because it felt nice."),
        t("stories.0.body.3", "After a few weeks, I noticed I wasn't reaching for sugar at 9 p.m. anymore. Then I started adding eggs to breakfast instead of skipping it. Then I joined a beginner strength class twice a week because a friend asked me to."),
        t("stories.0.body.4", "Three months in, my period came back on its own. No medication change. I cried on the bathroom floor."),
        t("stories.0.body.5", "The biggest lesson: I had been treating PCOS like a problem to attack. The minute I started treating my body like a partner, things actually changed.")
      ]
    },
    {
      name: t("stories.1.name", "Aisha, 33"),
      quote: t("stories.1.quote", "Strength training felt scary. Now it's the one hour a week that's just for me."),
      body: [
        t("stories.1.body.0", "I had never lifted a weight in my life. The gym felt like someone else's world. But after six years of struggling with PCOS, my doctor said one thing that stuck: 'Muscle is medicine for you.'"),
        t("stories.1.body.1", "I started at home with a 5kg dumbbell and YouTube videos. Twenty minutes, twice a week. The first month I felt stiff and slightly silly."),
        t("stories.1.body.2", "By month three, I was sleeping deeper than I had in years. My energy across the day stopped crashing. My acne started clearing without any new product."),
        t("stories.1.body.3", "Six months in, my fasting insulin had dropped meaningfully. My doctor was thrilled. I was just happy I felt like myself again."),
        t("stories.1.body.4", "The gym still isn't my world, I lift at home, I take rest weeks when life is loud, I don't track macros. But those two sessions a week are sacred. They're my mental health hour as much as my PCOS treatment."),
        t("stories.1.body.5", "If you're scared to start, start smaller than you think. A bag of rice as a weight. A YouTube beginner. Twice a week. That's it.")
      ]
    },
    {
      name: t("stories.2.name", "Priya, 26"),
      quote: t("stories.2.quote", "Inositol changed my cycles. But the basics changed my life."),
      body: [
        t("stories.2.body.0", "When I was finally diagnosed at 25, I felt both relieved and overwhelmed. I went down a supplement rabbit hole and bought eight bottles in a week."),
        t("stories.2.body.1", "An endocrinologist gently rerouted me. She told me to start with two things: myo-inositol twice a day, and a real breakfast with protein. Everything else could wait."),
        t("stories.2.body.2", "Within two cycles, my periods regulated for the first time in years. My acne calmed. The afternoon crashes that had defined my work day faded."),
        t("stories.2.body.3", "Inositol got the headlines in my story, but the truth is the breakfast did just as much. I had been running on coffee and toast for years and wondering why I felt unwell."),
        t("stories.2.body.4", "Now I'm careful about chasing the next thing. Sleep first. Food second. Movement third. Supplements as support, not the foundation. That order matters.")
      ]
    },
    {
      name: t("stories.3.name", "Nadia, 31"),
      quote: t("stories.3.quote", "I learned to grieve before I could heal."),
      body: [
        t("stories.3.body.0", "Nobody told me PCOS would be emotional. I was prepared for the medical side, the labs, the scans, the lifestyle changes. I wasn't prepared for the grief."),
        t("stories.3.body.1", "Grief over my skin in my 20s. Over the years of being told I was 'just stressed.' Over what fertility might or might not look like for me."),
        t("stories.3.body.2", "For a long time I tried to skip past the feelings and just 'be productive' about my health. It didn't work. The harder I pushed, the more I burned out."),
        t("stories.3.body.3", "Therapy helped me name what I was actually carrying. Once I let myself feel it, the lifestyle changes got easier, they stopped being punishment and started being care."),
        t("stories.3.body.4", "I still have PCOS. My cycles are still imperfect. But I'm not at war with my body anymore, and that has changed everything about how I live with this.")
      ]
    },
  ],
  myths: [
    { myth: t("myths.0.myth", "PCOS means you can't get pregnant."), fact: t("myths.0.fact", "Many people with PCOS conceive, sometimes with support, often without.") },
    { myth: t("myths.1.myth", "Losing weight cures PCOS."), fact: t("myths.1.fact", "PCOS is a chronic condition. Habits help symptoms; there is no single cure.") },
    { myth: t("myths.2.myth", "Only overweight people have PCOS."), fact: t("myths.2.fact", "PCOS affects people of every body size.") },
    { myth: t("myths.3.myth", "Birth control is the only treatment."), fact: t("myths.3.fact", "It's one tool. Diet, movement, sleep, and other meds all play meaningful roles.") },
    { myth: t("myths.4.myth", "PCOS is rare."), fact: t("myths.4.fact", "It affects roughly 1 in 10 people with ovaries, one of the most common hormonal conditions.") },
    { myth: t("myths.5.myth", "If your periods are regular, it's not PCOS."), fact: t("myths.5.fact", "Some people with PCOS have regular cycles. Diagnosis looks at hormones and ovaries too.") },
    { myth: t("myths.6.myth", "PCOS goes away after menopause."), fact: t("myths.6.fact", "Many symptoms ease, but metabolic risks like diabetes can persist, keep up healthy habits.") },
    { myth: t("myths.7.myth", "PCOS always means cysts on your ovaries."), fact: t("myths.7.fact", "The 'cysts' are actually undeveloped follicles, and not everyone with PCOS has them on imaging.") },
    { myth: t("myths.8.myth", "A keto diet is the best for PCOS."), fact: t("myths.8.fact", "Many eating patterns work. Steady protein, fiber, and whole carbs matter more than any single trend.") },
    { myth: t("myths.9.myth", "Hair growth on the face means high testosterone always."), fact: t("myths.9.fact", "It's a sign worth investigating but can have multiple causes; a clinician can clarify." ) },
  ],
};
