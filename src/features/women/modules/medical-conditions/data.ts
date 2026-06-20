"use client";
import { t } from "@/features/women/lib/i18n-utils";
import { type ModuleContent } from "@/features/women/data/modules";

export const medicalConditionsData: ModuleContent = {
  slug: "medical-conditions",
  title: t("title", "Medical Conditions"),
  subtitle: t("subtitle", "Expert care and management for a range of women's health conditions."),
  iconKey: "ClipboardPlus",
  tone: "slate",
  understanding: [
    {
      label: t("understanding.0.label", "Different Health Conditions"),
      tone: "peach",
      body: [
        t("understanding.0.body.0", "Women's bodies face a unique mix of medical conditions, many of which can show up at any age, endometriosis, fibroids, adenomyosis, PCOS, thyroid disorders (Hashimoto's, Graves', subclinical hypothyroidism), autoimmune diseases (lupus, rheumatoid arthritis, multiple sclerosis), migraines, anemia, recurrent UTIs, pelvic floor disorders, and chronic pain conditions like fibromyalgia."),
        t("understanding.0.body.1", "These conditions often overlap and are frequently missed. Symptoms get blamed on stress, anxiety, or 'just being tired' when there's an identifiable, treatable condition underneath. Many women hear 'your labs are normal' for years before someone runs the right test or asks the right question."),
        t("understanding.0.body.2", "Early recognition shortens suffering enormously. The longer a condition goes unnamed, the more it shapes daily life, sleep, work, relationships, mental health. Endometriosis still takes an average of 7–10 years to diagnose. Hashimoto's is often missed for a decade. Knowing the names and patterns is half the battle."),
        t("understanding.0.body.3", "A good symptom journal turns vague experience into something a clinician can act on. Track date, symptom, severity (1–10), what you were doing, what you ate, where you were in your cycle, sleep quality, and stress level. Three months of this changes appointments completely."),
        t("understanding.0.body.4", "You're not expected to diagnose yourself. You are expected to be the expert on your own body, what's normal for you, what's new, what's changing. Clinicians see you for fifteen minutes; you live in your body 24/7."),
        t("understanding.0.body.5", "Don't be afraid to seek a second opinion. The first doctor isn't always the right doctor, and persistent symptoms with 'normal' results often need a fresh set of eyes, often a specialist rather than a generalist."),
        t("understanding.0.body.6", "Many of these conditions respond well to a combination approach: targeted medical treatment plus the same foundations that help everything else (sleep, food, movement, stress, community). Neither alone is usually enough."),
        t("understanding.0.body.7", "Having a chronic condition does not mean giving up on a full life. It means building a life that works with your body rather than against it, which often turns out to be a better life than the one you were forcing before.")
      ]
    },
    {
      label: t("understanding.1.label", "Understanding Women's Health"),
      tone: "blue",
      body: [
        t("understanding.1.body.0", "For most of medical history, research was conducted on male bodies. Women were often excluded from clinical trials until the 1990s, and even today many drug doses, symptom checklists, and 'normal' ranges were calibrated on male physiology. The gap is closing, but it's still real."),
        t("understanding.1.body.1", "This shows up in concrete ways. Heart attacks in women often present as fatigue, jaw pain, nausea, dizziness, or back pain rather than classic crushing chest pain, and are still misdiagnosed more often than in men. ADHD in women is frequently missed because it presents differently than the textbook hyperactive-boy pattern. Autoimmune conditions disproportionately affect women but are often dismissed as anxiety."),
        t("understanding.1.body.2", "Pain is taken less seriously in women, on average. Studies show women wait longer for pain medication in emergency rooms and are more likely to be referred to mental health services for physical complaints. Knowing this isn't about blame, it's about preparation, so you can advocate clearly when it matters."),
        t("understanding.1.body.3", "Asking 'what else could this be?' is one of the most useful questions in medicine. So is 'what would you do if I were your sister?' These questions push past pattern-matching and force a fresh look."),
        t("understanding.1.body.4", "Bring a friend or partner to appointments when something feels serious, both for emotional support and an extra set of ears. Write down questions in advance. Ask for results in writing. Ask 'what's the diagnostic plan if this doesn't improve?' before you leave."),
        t("understanding.1.body.5", "Hormonal context matters at every age. The same symptom can mean very different things in your twenties, thirties, forties, and fifties, and a clinician who doesn't ask about your cycle, contraception, pregnancies, or perimenopause status is missing context."),
        t("understanding.1.body.6", "Race and class shape women's health outcomes too. Black women in particular face significantly worse maternal health outcomes and longer diagnostic delays for the same symptoms. Knowing this isn't pessimism, it's a reason to advocate harder, bring support, and seek out clinicians who take you seriously."),
        t("understanding.1.body.7", "Women's health is not niche health. It's half the population, across an entire lifespan, with conditions that affect every body system. Treating it as central, not optional, is what care should look like.")
      ]
    },
    {
      label: t("understanding.2.label", "Common Reproductive Health Concerns"),
      tone: "rose",
      body: [
        t("understanding.2.body.0", "Common concerns include painful periods, heavy bleeding, irregular cycles, fibroids, endometriosis, adenomyosis, ovarian cysts, PCOS, recurrent UTIs, yeast infections, bacterial vaginosis, pelvic floor dysfunction, painful sex, low libido, and unexplained infertility. Most are common; very few are rare."),
        t("understanding.2.body.1", "Severe period pain, pain that stops you from working, sleeping, or moving, is one of the most common signs of endometriosis or adenomyosis. 'Bad cramps are normal' is one of the most damaging myths in women's health. Real pain deserves a real workup."),
        t("understanding.2.body.2", "Heavy periods (soaking through pads or tampons hourly, large clots, lasting more than 7 days) can lead to iron-deficiency anemia and exhaustion. Fibroids, adenomyosis, polyps, and thyroid issues are common causes, all treatable."),
        t("understanding.2.body.3", "Bleeding between periods, after sex, or after menopause is always worth checking. Most causes are benign (cervical irritation, polyps, hormonal shifts), but ruling out the more serious ones is part of why the question matters."),
        t("understanding.2.body.4", "Pain with sex (dyspareunia) is more common than people realize and almost always treatable. Causes range from vaginal dryness, infections, and pelvic floor tension to endometriosis, scar tissue, or vulvodynia. None of them require you to 'just push through.'"),
        t("understanding.2.body.5", "Recurrent UTIs and yeast infections often respond to simple changes, hydration, peeing after sex, breathable underwear, vaginal estrogen if perimenopausal, but they can also point to underlying issues like diabetes or hormonal shifts that deserve a closer look."),
        t("understanding.2.body.6", "Pelvic floor dysfunction (leaking with sneezing, urgency, prolapse, painful sex, chronic pelvic pain) is extremely common after childbirth and in perimenopause. Pelvic floor physical therapy is one of the most effective and underused interventions in women's health."),
        t("understanding.2.body.7", "Bring specifics to appointments to shorten the path to relief. 'Heavy periods' is vague; 'soaking through a super tampon every two hours for three days' is actionable. Numbers, dates, and patterns get faster help than feelings.")
      ]
    },
    {
      label: t("understanding.3.label", "Tips to Improve Health"),
      tone: "mint",
      body: [
        t("understanding.3.body.0", "Lay the foundations: consistent sleep (7–9 hours), hydration (2–3 liters), regular meals with protein and fiber, and daily movement. None are dramatic; together they prevent or improve most chronic conditions."),
        t("understanding.3.body.1", "Get basic labs annually: thyroid (TSH, free T4, TPO antibodies), iron panel (ferritin, not just hemoglobin), vitamin D, B12, fasting glucose and HbA1c, and a full lipid panel. Add hormone testing if cycles are off."),
        t("understanding.3.body.2", "Track your cycle and symptoms over 3–6 months. Patterns reveal themselves slowly, a single chart often answers questions years of vague memory couldn't."),
        t("understanding.3.body.3", "Build a small care team you trust: a primary care doctor, a gynecologist, and one or two specialists if you have a chronic condition. A pelvic floor physiotherapist, mental health professional, or registered dietitian can be game-changers."),
        t("understanding.3.body.4", "Continuity of care matters, a doctor who knows your history catches more than one seeing you for the first time. If you can keep one clinician across years, do."),
        t("understanding.3.body.5", "Strength training twice a week protects bone density, supports hormones, improves insulin sensitivity, and reduces injury risk. The earlier you start, the more it pays off; the later you start, it still helps enormously."),
        t("understanding.3.body.6", "Manage stress as a medical issue, not a personality trait. Chronic stress raises inflammation, worsens autoimmune conditions, disrupts sleep, and amplifies pain. Daily wind-down rituals and real rest are medicine."),
        t("understanding.3.body.7", "Cultivate connection. Loneliness is now considered as harmful to health as smoking. A few reliable relationships protect physical and mental health more than most supplements."),
        t("understanding.3.body.8", "Be your own advocate without apology. Ask for results in writing, request the test if you think it's needed, get the second opinion, and switch clinicians if you're not being heard."),
        t("understanding.3.body.9", "Trust your body. Your instinct that something is off is data, often the most important data in the room.")
      ]
    }
  ],
  articles: [
    {
      title: t("articles.0.title", "Endometriosis basics"),
      summary: t("articles.0.summary", "Tissue similar to the uterine lining grows outside the uterus, often causing pain."),
      body: [
        t("articles.0.body.0", "Endometriosis is a condition in which tissue similar to the uterine lining grows outside the uterus, on the ovaries, fallopian tubes, bowel, bladder, and elsewhere in the pelvis. It affects roughly 1 in 10 people with periods."),
        t("articles.0.body.1", "Despite how common it is, the average diagnosis takes 7–10 years. The pain is often dismissed as 'bad periods,' and the only definitive diagnosis is laparoscopic surgery, though imaging and a careful clinical picture can strongly suggest it."),
        t("articles.0.body.2", "Symptoms include severe period pain (often unresponsive to over-the-counter pain medication), pain at other times in the cycle, pain with sex, painful bowel movements or urination during periods, heavy bleeding, fatigue, and infertility. Not everyone has all of these."),
        t("articles.0.body.3", "The pain is not proportional to how much endometriosis is present. Someone with mild disease can have severe pain; someone with extensive disease can have very little."),
        t("articles.0.body.4", "Treatment is layered. Pain management (heat, NSAIDs, sometimes prescription medication), hormonal therapy (the pill, progesterone-only options, hormonal IUDs, GnRH agonists), pelvic floor physiotherapy, lifestyle changes, and surgery (laparoscopy to excise lesions) all play roles."),
        t("articles.0.body.5", "Lifestyle alone won't 'cure' endometriosis, but anti-inflammatory eating, stress management, gentle movement, sleep, and pelvic floor work can meaningfully reduce symptoms alongside medical treatment."),
        t("articles.0.body.6", "If you suspect endometriosis, find a clinician with specific experience, a general gynecologist may not be enough. Endometriosis specialists exist and dramatically shorten the path to relief."),
        t("articles.0.body.7", "Most importantly: severe period pain is not your fault, not in your head, and not something to push through. There are answers and there is real care.")
      ]
    },
    {
      title: t("articles.1.title", "Thyroid and your mood"),
      summary: t("articles.1.summary", "An under- or over-active thyroid can mimic depression, anxiety, and fatigue."),
      body: [
        t("articles.1.body.0", "The thyroid is a small butterfly-shaped gland at the front of your neck, but its influence is enormous. Thyroid hormones regulate metabolism, energy, body temperature, mood, heart rate, digestion, and even cycle regularity."),
        t("articles.1.body.1", "Thyroid disorders are far more common in women than men, especially between the ages of 30 and 60. Hypothyroidism (under-active) is the most common, but hyperthyroidism (over-active) and autoimmune conditions like Hashimoto's and Graves' are also frequent."),
        t("articles.1.body.2", "Symptoms of hypothyroidism include fatigue, weight gain, cold intolerance, dry skin, hair thinning, constipation, low mood, brain fog, heavier or longer periods, and slower heart rate. It's often misdiagnosed as depression."),
        t("articles.1.body.3", "Hyperthyroidism looks the opposite, anxiety, racing heart, weight loss, heat intolerance, tremor, lighter periods, and trouble sleeping. It can be misdiagnosed as panic disorder."),
        t("articles.1.body.4", "Diagnosis is straightforward but often incomplete. Most basic tests check only TSH. A fuller picture includes free T4, free T3, and thyroid antibodies (TPO, TgAb). Ask for the full panel if symptoms persist despite 'normal' TSH."),
        t("articles.1.body.5", "Treatment is highly effective. Hypothyroidism is usually treated with daily levothyroxine, sometimes combined with T3. Hyperthyroidism may need anti-thyroid medication, radioactive iodine, or rarely surgery."),
        t("articles.1.body.6", "Lifestyle matters too. Adequate iodine (from iodized salt or fish), selenium (Brazil nuts, fish), zinc, iron, and vitamin D all support thyroid function. Chronic stress and severe under-eating can suppress thyroid hormones."),
        t("articles.1.body.7", "If you've been struggling with mood, energy, or weight despite trying everything, ask for a thorough thyroid workup. The answer is often surprisingly simple.")
      ]
    },
    {
      title: t("articles.2.title", "UTIs: prevention over panic"),
      summary: t("articles.2.summary", "Hydration, peeing after sex, and front-to-back wiping prevent most UTIs."),
      body: [
        t("articles.2.body.0", "Urinary tract infections are one of the most common reasons women see a doctor. Most happen when bacteria, usually from the gut, travel up the short female urethra into the bladder."),
        t("articles.2.body.1", "Symptoms include burning when peeing, urgency, frequency, lower abdominal pressure, and sometimes cloudy or strong-smelling urine. Blood in the urine, fever, back pain, or chills can mean the infection has reached the kidneys and needs urgent care."),
        t("articles.2.body.2", "Prevention is largely about simple habits. Drink enough water (around 2 liters a day) so you pee regularly. Urinate after sex to flush bacteria from the urethra. Wipe front to back. Avoid holding urine for long periods."),
        t("articles.2.body.3", "Wear breathable cotton underwear when possible. Avoid scented soaps, douches, and wipes in the genital area, they disrupt the natural microbial balance that protects you."),
        t("articles.2.body.4", "If you get UTIs more than 2–3 times a year, ask for a workup rather than another round of antibiotics. Causes can include incomplete bladder emptying, low estrogen (especially in perimenopause and postmenopause), kidney stones, or anatomical factors."),
        t("articles.2.body.5", "For postmenopausal recurrent UTIs, low-dose vaginal estrogen is often life-changing and is safe even for many people who can't use systemic hormone therapy."),
        t("articles.2.body.6", "Cranberry products and D-mannose have modest evidence and are reasonable to try, but they don't replace good hygiene habits or medical care when needed."),
        t("articles.2.body.7", "Treat infections promptly, uncomplicated UTIs are usually resolved with a short course of antibiotics. Don't wait it out, and don't share leftover antibiotics.")
      ]
    },
    {
      title: t("articles.3.title", "Living with autoimmune conditions"),
      summary: t("articles.3.summary", "Why women are hit harder, and how to build a sustainable life around them."),
      body: [
        t("articles.3.body.0", "Autoimmune conditions, where the immune system mistakenly attacks the body's own tissues, affect women three times more often than men. Hashimoto's, Graves', lupus, rheumatoid arthritis, MS, type 1 diabetes, celiac, and psoriasis are among the most common."),
        t("articles.3.body.1", "Symptoms vary widely depending on which tissue is being targeted, but many autoimmune conditions share threads: fatigue, joint or muscle pain, brain fog, skin changes, gut issues, and unpredictable flares."),
        t("articles.3.body.2", "Diagnosis is often slow. Symptoms can be vague, blood tests can fluctuate, and one autoimmune condition can hide another. Many women see multiple specialists before getting a clear picture."),
        t("articles.3.body.3", "Once diagnosed, the work is layered: medication (often immune-modulating), monitoring, and a lifestyle that supports rather than strains the immune system."),
        t("articles.3.body.4", "Sleep is foundational. Chronic sleep loss measurably worsens autoimmune activity. Aim for 7–9 hours, on a consistent schedule, and treat it as part of your medical plan, not optional."),
        t("articles.3.body.5", "Stress is similarly powerful. Chronic stress drives flares for many people. Therapy, gentle daily practices, time outdoors, and saying no to overcommitment all help meaningfully."),
        t("articles.3.body.6", "Eating patterns vary by condition, but most autoimmune-friendly diets share principles: enough protein, plenty of vegetables, fiber, omega-3s, lower ultra-processed foods, and individual attention to specific triggers (like gluten in celiac)."),
        t("articles.3.body.7", "Build a small, expert team. A specialist for the condition itself, a primary doctor who coordinates, and ideally a mental health provider, autoimmune life is heavy, and you don't have to carry it alone. Many people live full, vivid lives with autoimmune conditions; they just live them with care.")
      ]
    }
  ],
  tips: [
    t("tips.0", "Keep a symptom journal before any specialist visit."),
    t("tips.1", "Bring a friend or partner to appointments, two ears are better."),
    t("tips.2", "Ask: 'What else could this be?' if you feel dismissed."),
    t("tips.3", "Track meds and side effects in one place."),
    t("tips.4", "Get annual labs: thyroid, iron, vitamin D, B12, glucose."),
    t("tips.5", "Request the full thyroid panel, not just TSH."),
    t("tips.6", "Pee after sex to reduce UTI risk."),
    t("tips.7", "Wear cotton underwear; skip scented washes."),
    t("tips.8", "If a doctor dismisses you, ask for a second opinion."),
    t("tips.9", "Move daily, even 10 minutes lowers inflammation."),
    t("tips.10", "Sleep is medicine for chronic conditions, protect 7–9 hours."),
    t("tips.11", "Don't share antibiotics or skip a full course.")
  ],
  stories: [
    {
      name: t("stories.0.name", "Sara, 35"),
      quote: t("stories.0.quote", "Getting diagnosed with endo took 9 years. Naming it changed everything."),
      body: [
        t("stories.0.body.0", "From my first period at 13, I was the girl who cancelled plans, missed school, and curled up on the bathroom floor. Every doctor I saw said the same thing: 'Some women just have bad periods.'"),
        t("stories.0.body.1", "By 22, I was on three different pills hoping one would work. By 27, I was managing my career around my cycle. I was constantly tired and quietly resigned."),
        t("stories.0.body.2", "At 31, a new GP, a woman in her 40s, looked at me and said: 'I think this is endometriosis. Let's find out.' Six months later, after a laparoscopy, it was confirmed."),
        t("stories.0.body.3", "Naming it was its own form of relief. Years of being told it was in my head dissolved in one diagnosis."),
        t("stories.0.body.4", "Treatment is ongoing, a hormonal IUD, pelvic floor physio, anti-inflammatory eating, and regular check-ins with a specialist. I still have hard weeks. But I'm not gaslighting myself anymore."),
        t("stories.0.body.5", "If you've been told 'it's just bad periods' for years, please get another opinion. You deserve to be believed.")
      ]
    },
    {
      name: t("stories.1.name", "Hana, 42"),
      quote: t("stories.1.quote", "A thyroid panel finally explained the fog I'd carried for years."),
      body: [
        t("stories.1.body.0", "I had been tired for as long as I could remember. Through my late twenties, I blamed work. Through my thirties, I blamed motherhood. By 40, I was struggling to remember words mid-sentence."),
        t("stories.1.body.1", "My standard labs were always 'normal.' My TSH was at the high end of the range, but technically fine."),
        t("stories.1.body.2", "Finally, a friend who's a doctor told me to ask for free T3, free T4, and antibodies. The antibodies came back high, Hashimoto's."),
        t("stories.1.body.3", "Treatment didn't fix everything overnight, but within three months the fog had lifted enough that I felt like myself again. My energy returned in increments."),
        t("stories.1.body.4", "I learned that 'normal' on a lab report doesn't always mean 'normal for you.' Asking for the fuller picture changed my life."),
        t("stories.1.body.5", "If you've been struggling for years and being told nothing's wrong, push for a complete thyroid panel. It's a simple set of tests that explains a lot.")
      ]
    },
    {
      name: t("stories.2.name", "Reema, 38"),
      quote: t("stories.2.quote", "Recurrent UTIs were my normal until vaginal estrogen ended them."),
      body: [
        t("stories.2.body.0", "I had at least four UTIs a year for nearly a decade. Antibiotics worked, then they came back. I was told to drink more water, pee after sex, take cranberry. I did all of it."),
        t("stories.2.body.1", "After perimenopause started in my late 30s, the UTIs got worse. A urogynecologist finally suggested low-dose vaginal estrogen."),
        t("stories.2.body.2", "I was skeptical, and a little scared by what'd I'd read about hormones online. She walked me through the difference between low-dose vaginal estrogen and systemic HRT, and how safe it is even for many people who can't use the systemic kind."),
        t("stories.2.body.3", "Within three months, the UTIs stopped. I haven't had one in over a year now."),
        t("stories.2.body.4", "I tell every woman I know: if recurrent UTIs are part of your life, especially around perimenopause, ask about vaginal estrogen. It's quietly life-changing.")
      ]
    },
    {
      name: t("stories.3.name", "Anya, 45"),
      quote: t("stories.3.quote", "Living with lupus taught me how to listen to my body."),
      body: [
        t("stories.3.body.0", "I was diagnosed with lupus at 33. The first year was a blur of medications, side effects, and grief."),
        t("stories.3.body.1", "What helped most wasn't a single treatment. It was learning to read my own warning signs, the subtle fatigue before a flare, the joint stiffness on bad-sleep weeks, the way stress sat in my body for days."),
        t("stories.3.body.2", "I built a small toolkit. Sleep is my most important medicine. I rest before I'm exhausted, not after. I move daily, gently. I keep meals simple and steady."),
        t("stories.3.body.3", "I also said no to a lot. Friendships that drained me. Work commitments that were too much. The version of myself who said yes to everything is gone, and I'm better for it."),
        t("stories.3.body.4", "Lupus is still part of my life. But it doesn't run my life anymore. That shift took years and a lot of self-trust.")
      ]
    }
  ],
  myths: [
    { myth: t("myths.0.myth", "If tests are normal, nothing is wrong."), fact: t("myths.0.fact", "Normal labs don't always mean normal life. Trust your body and seek second opinions.") },
    { myth: t("myths.1.myth", "Women just feel pain more."), fact: t("myths.1.fact", "Pain is real and measurable. It's not a personality trait.") },
    { myth: t("myths.2.myth", "Chronic conditions mean giving up."), fact: t("myths.2.fact", "Most are highly manageable with the right plan and support.") },
    { myth: t("myths.3.myth", "You're too young for that condition."), fact: t("myths.3.fact", "Many conditions show up earlier than textbooks suggest, symptoms matter more than age.") },
    { myth: t("myths.4.myth", "Heart disease is a man's problem."), fact: t("myths.4.fact", "It's the leading cause of death for women too, and symptoms often look different.") },
    { myth: t("myths.5.myth", "Autoimmune diseases are rare."), fact: t("myths.5.fact", "They affect ~1 in 12 women, often hitting in their 20s–40s.") },
    { myth: t("myths.6.myth", "If a doctor dismisses you, you're being dramatic."), fact: t("myths.6.fact", "Trust your gut. A second opinion has saved countless lives.") },
    { myth: t("myths.7.myth", "Endometriosis only causes period pain."), fact: t("myths.7.fact", "It can affect bowel, bladder, sex, fertility, and energy across the whole month.") },
    { myth: t("myths.8.myth", "Antibiotics will always fix recurrent UTIs."), fact: t("myths.8.fact", "Recurrent infections often need a deeper workup, not just more antibiotics.") },
    { myth: t("myths.9.myth", "Hashimoto's is rare."), fact: t("myths.9.fact", "It's one of the most common causes of hypothyroidism in women.") }
  ]
};
