"use client";
import { t } from "@/features/women/lib/i18n-utils";
import { type ModuleContent } from "@/features/women/data/modules";

export const menopauseData: ModuleContent = {
  slug: "menopause",
  title: t("title", "Menopause"),
  subtitle: t("subtitle", "Holistic care to manage symptoms and ease the transition through menopause."),
  iconKey: "HeartPulse",
  tone: "mint",
  understanding: [
    {
      label: t("understanding.0.label", "Perimenopause"),
      tone: "peach",
      body: [
        t("understanding.0.body.0", "Perimenopause is the transition leading up to menopause, often starting in the late 30s or 40s and lasting anywhere from 4 to 10 years. It's the longest hormonal transition of adult life, and yet it's one of the least talked about, which leaves many people blindsided by what's happening in their own bodies."),
        t("understanding.0.body.1", "Hormones, especially estrogen and progesterone, fluctuate unpredictably during perimenopause. Estrogen doesn't simply drop; it spikes and crashes, sometimes dramatically, while progesterone trends downward. These swings drive most of the symptoms, and they can vary wildly month to month."),
        t("understanding.0.body.2", "Common signs include irregular cycles (shorter, longer, heavier, lighter), sleep issues (especially waking at 3am), mood swings, anxiety that feels new or worse, brain fog, joint aches, weight shifts (often around the middle), hot flashes, night sweats, lower libido, vaginal dryness, and changes in skin and hair."),
        t("understanding.0.body.3", "Less-known but extremely common signs include heart palpitations, tinnitus, frozen shoulder, dry eyes, itchy skin, gum changes, increased migraines, urinary urgency, and sudden histamine sensitivity. If you're collecting strange new symptoms in your 40s, perimenopause is often the missing thread."),
        t("understanding.0.body.4", "Many people are told they're 'too young' for perimenopause when symptoms appear in their late 30s. They aren't. Early perimenopause is real, often missed, and often dismissed, sometimes for years before anyone names it."),
        t("understanding.0.body.5", "Mental health shifts are common and underdiscussed. Rates of depression and anxiety rise sharply during perimenopause, and the cause is often hormonal rather than circumstantial. Treating it as 'just stress' misses an effective opportunity for relief."),
        t("understanding.0.body.6", "Perimenopause is highly treatable. Hormone therapy (when appropriate) is one of the most effective tools we have; non-hormonal medications, lifestyle adjustments, and pelvic care all help. Suffering through is a choice, not a requirement."),
        t("understanding.0.body.7", "Find a clinician who actually understands perimenopause. Many doctors received minimal training in it, and the difference between an informed clinician and an uninformed one is enormous. The Menopause Society directory is a useful starting point."),
        t("understanding.0.body.8", "It isn't a decline, it's a transition. With the right support, many people emerge from perimenopause with a clearer sense of what they want, sharper boundaries, and a different relationship with their body and their time.")
      ]
    },
    {
      label: t("understanding.1.label", "Menopause"),
      tone: "blue",
      body: [
        t("understanding.1.body.0", "Menopause is officially the single day you've gone 12 full months without a period. Everything before is perimenopause; everything after is postmenopause. The average age is around 51, with a normal range from 45 to 55. Before 40 is premature menopause; 40–45 is early menopause."),
        t("understanding.1.body.1", "Menopause can also be induced, by surgery (removal of both ovaries), chemotherapy, radiation, or certain medications. Surgical menopause is often more abrupt and intense because the hormonal drop is immediate rather than gradual, and usually deserves proactive treatment."),
        t("understanding.1.body.2", "Estrogen has receptors almost everywhere in the body, brain, heart, bones, joints, skin, gut, bladder, vagina, blood vessels. When estrogen drops, the effects are felt almost everywhere too, which is why menopause symptoms can seem to come from completely unrelated systems."),
        t("understanding.1.body.3", "Symptoms include hot flashes, night sweats, vaginal dryness, painful sex, sleep changes, mood shifts, anxiety, brain fog, joint pain, skin changes, hair thinning, weight redistribution, urinary urgency, recurrent UTIs, and reduced libido. Symptoms vary enormously, some people sail through, others struggle for years."),
        t("understanding.1.body.4", "Menopause also brings longer-term changes, accelerated bone loss in the first 5–7 years (raising osteoporosis risk), increased cardiovascular risk (heart disease becomes the leading cause of death in women postmenopause), body composition shifts, and changes in cognitive function for some."),
        t("understanding.1.body.5", "The good news: most of these long-term risks respond to action. Strength training protects bones and muscle. Mediterranean-style eating and exercise protect the heart. Sleep, social connection, and cognitive engagement protect the brain."),
        t("understanding.1.body.6", "Treatment options include hormone therapy (HRT/MHT), non-hormonal medications (certain SSRIs, gabapentin, oxybutynin for hot flashes; newer options like fezolinetant), vaginal estrogen for genitourinary symptoms (very low risk, very high reward), and meaningful lifestyle changes."),
        t("understanding.1.body.7", "Hormone therapy has been badly misunderstood since the early 2000s. For most healthy people within 10 years of menopause and under 60, the benefits outweigh the risks, and the risks are smaller than the original headlines suggested. Vaginal estrogen is safe for almost everyone."),
        t("understanding.1.body.8", "Cultural narratives about menopause have done damage. The idea that it's the end of vitality, attractiveness, or relevance is wrong, and increasingly being challenged. Many people describe their postmenopausal years as some of the most powerful of their lives."),
        t("understanding.1.body.9", "There's no one-size-fits-all menopause plan, only the plan that fits you, your body, your history, your values, and your goals. A good clinician helps you build that plan, not hand you a generic one.")
      ]
    },
    {
      label: t("understanding.2.label", "Postmenopause"),
      tone: "rose",
      body: [
        t("understanding.2.body.0", "Postmenopause begins after that 12-month mark without a period and lasts the rest of your life, which, for many women, is now 30 to 40 years. It's not a footnote; it's a major chapter, and it deserves real planning."),
        t("understanding.2.body.1", "Many disruptive symptoms ease over time. Hot flashes, night sweats, and mood swings often calm down within a few years for most people. Some, like vaginal dryness, painful sex, and urinary symptoms, can linger or worsen and benefit from ongoing care (vaginal estrogen is highly effective)."),
        t("understanding.2.body.2", "Focus shifts to long-term health: bones (osteoporosis prevention), heart (cardiovascular risk now equals or exceeds men's), brain (cognition, dementia risk), muscle (sarcopenia), and metabolism (insulin sensitivity, body composition). The work done now compounds for decades."),
        t("understanding.2.body.3", "Strength training becomes one of the most important habits in life, not optional, not a 'nice to have.' Two to three sessions a week protects bone density, muscle mass, balance, metabolic health, and independence into old age."),
        t("understanding.2.body.4", "Nutrition needs shift, more protein (often 1.2–1.6g per kg body weight daily), adequate calcium (1200mg/day, ideally from food), vitamin D, fiber, omega-3s, and a Mediterranean-style pattern. Alcohol becomes harder on sleep, mood, and bones."),
        t("understanding.2.body.5", "Genitourinary syndrome of menopause (GSM), vaginal dryness, painful sex, urinary urgency, recurrent UTIs, affects most postmenopausal women but is consistently undertreated. Vaginal estrogen, moisturizers, and pelvic floor physiotherapy can be life-changing."),
        t("understanding.2.body.6", "Bone density screening (DEXA scan) becomes important, typically starting around 65 (or earlier with risk factors). Cardiovascular check-ins (blood pressure, lipids, glucose), regular cancer screenings, and skin checks should stay on the calendar."),
        t("understanding.2.body.7", "Mental health continues to need attention. Rates of depression often improve postmenopause, but loneliness, grief (parents, partners, friends), and identity changes can hit hard. Therapy, community, and purposeful engagement matter."),
        t("understanding.2.body.8", "Sexual health doesn't end, it changes. Many people report better, more connected, more honest sex postmenopause, especially when GSM is treated. Desire, arousal, and pleasure are all still very much possible."),
        t("understanding.2.body.9", "Many describe postmenopause as a powerful chapter, clearer priorities, more freedom from cycles and contraception, less tolerance for what doesn't matter, deeper friendships, and a kind of grounded confidence that didn't exist before.")
      ]
    },
    {
      label: t("understanding.3.label", "Menopause Relief"),
      tone: "mint",
      body: [
        t("understanding.3.body.0", "Start with the basics, cool bedroom (around 65°F/18°C), less alcohol and caffeine (especially in the afternoon), a steady wind-down ritual, dressing in layers, breathable bedding, and a cold glass of water by the bed for night sweats."),
        t("understanding.3.body.1", "Lift weights twice a week. Strength training is one of the most effective interventions for menopause, it improves bone density, muscle mass, sleep, mood, insulin sensitivity, and even hot flashes. Bodyweight, bands, or weights all count."),
        t("understanding.3.body.2", "Eat to support this stage, steady protein at every meal (25–35g), fiber from a variety of plants, healthy fats, calcium-rich foods, and adequate vitamin D. Reduce ultra-processed foods and refined sugar, which worsen hot flashes and energy crashes."),
        t("understanding.3.body.3", "Movement matters more than ever, strength training, walking (especially after meals), flexibility work, and balance training. Even 10–20 minutes daily makes a meaningful difference."),
        t("understanding.3.body.4", "Hormone therapy (HRT/MHT) is the most effective treatment for hot flashes, night sweats, sleep, mood, and genitourinary symptoms, and it also protects bones. Modern HRT (transdermal estradiol with micronized progesterone) is far safer than older formulations and worth a serious conversation with an informed clinician."),
        t("understanding.3.body.5", "Non-hormonal options exist for those who can't or don't want HRT: certain SSRIs/SNRIs (especially paroxetine, venlafaxine), gabapentin, oxybutynin, clonidine, and the newer fezolinetant for hot flashes. CBT for hot flashes is also surprisingly effective."),
        t("understanding.3.body.6", "For genitourinary symptoms, vaginal estrogen is often life-changing, and it's safe for almost everyone, including most cancer survivors (with their oncologist's input). Vaginal moisturizers and lubricants help too. Don't suffer in silence here."),
        t("understanding.3.body.7", "Sleep often takes the biggest hit. Treat it as medical, cool room, no alcohol, screens off early, magnesium glycinate, and address night sweats directly. If sleep stays bad, sleep apnea risk rises postmenopause and is worth screening for."),
        t("understanding.3.body.8", "Mental health support during the transition is wise, not weakness. Therapy, community, and sometimes medication can make a year of perimenopause much easier than white-knuckling it."),
        t("understanding.3.body.9", "Build a small care team you trust, an informed primary care doctor, a menopause-literate gynecologist or specialist, possibly a pelvic floor physiotherapist, a dietitian, and a therapist. The right team turns this chapter from something endured into something navigated.")
      ]
    }
  ],
  articles: [
    {
      title: t("articles.0.title", "Perimenopause can start in your 40s"),
      summary: t("articles.0.summary", "Cycle changes, sleep shifts, and mood swings can begin a decade before your last period."),
      body: [
        t("articles.0.body.0", "Perimenopause is one of the most under-recognized chapters in women's health. Most women still think menopause arrives in their 50s and that everything before that is 'normal.' For many, perimenopause actually begins in the late 30s or early 40s, a full decade before their last period."),
        t("articles.0.body.1", "Perimenopause is the transition to menopause, when hormones, especially estrogen and progesterone, start fluctuating unpredictably. Estrogen can spike high one month and crash low the next. Progesterone tends to fall earlier and faster."),
        t("articles.0.body.2", "These swings drive a wide and confusing range of symptoms: cycles that get shorter, longer, heavier, lighter, or skipped; new sleep issues (especially waking at 3 a.m.); mood swings, anxiety, or rage that feels out of character; brain fog; joint aches; weight settling around the middle; lower libido; and the first hot flashes."),
        t("articles.0.body.3", "Many women are told they're 'too young' for perimenopause when symptoms start in their late 30s. They aren't. The textbook age range is wider than the textbook usually says, and being dismissed only delays helpful care."),
        t("articles.0.body.4", "Perimenopause symptoms can come and go for years before periods stop entirely. Some women have a relatively easy transition; others have years of significant symptoms. Both are normal."),
        t("articles.0.body.5", "It's also highly treatable. Lifestyle foundations, strength training, adequate protein, steady sleep, stress care, less alcohol, make a real difference. Hormone therapy, when appropriate, can dramatically smooth the transition. Non-hormonal medications help with specific symptoms."),
        t("articles.0.body.6", "Find a clinician who actually understands perimenopause. A menopause-trained doctor can shorten years of trial and error into a focused plan."),
        t("articles.0.body.7", "If symptoms in your late 30s or early 40s feel new, confusing, and out of character, perimenopause is worth considering, even if your doctor brushes it off. Knowledge is the first step to relief.")
      ]
    },
    {
      title: t("articles.1.title", "Hot flashes, demystified"),
      summary: t("articles.1.summary", "Layered clothing, cool bedrooms, and reducing alcohol help. HRT is safer than headlines."),
      body: [
        t("articles.1.body.0", "Hot flashes, sudden waves of intense heat, often with sweating and a flushed face, sometimes followed by chills, are the most stereotyped menopause symptom for a reason. Up to 80% of women experience them at some point, and for some they're brief; for others, they last a decade."),
        t("articles.1.body.1", "Night sweats are the same phenomenon happening during sleep. They can shred sleep quality and, with it, mood, focus, and energy."),
        t("articles.1.body.2", "Hot flashes happen because dropping estrogen disrupts the brain's temperature regulation. The body misreads small temperature changes as overheating and triggers cooling, sweating, flushing, blood vessel dilation, before quickly overcorrecting."),
        t("articles.1.body.3", "Common triggers include alcohol, caffeine, spicy food, stress, warm rooms, hot showers, and tight clothing. Identifying your personal triggers can reduce frequency meaningfully."),
        t("articles.1.body.4", "Practical tools that genuinely help: layered clothing, breathable fabrics (cotton, linen, bamboo), a fan at the bedside, a cool bedroom (around 18°C / 65°F), cooling pillows, and a glass of cold water by the bed."),
        t("articles.1.body.5", "Lifestyle changes help significantly. Limiting alcohol especially in the evening, regular exercise (especially strength training), maintaining a healthy weight, stopping smoking, and stress management all reduce hot flash frequency and intensity."),
        t("articles.1.body.6", "Hormone therapy (HRT) is by far the most effective treatment for hot flashes, typically reducing them by 75% or more. The old fears about HRT have been substantially revised. For most healthy women under 60 and within 10 years of menopause, modern HRT is safer than the headlines suggested, and the benefits often outweigh the risks."),
        t("articles.1.body.7", "Non-hormonal options include certain antidepressants (low-dose SSRIs and SNRIs), gabapentin, fezolinetant (a newer specifically-designed option), and CBT for hot flashes. All have evidence and can be discussed with a menopause-aware clinician.")
      ]
    },
    {
      title: t("articles.2.title", "Strength and bones"),
      summary: t("articles.2.summary", "Estrogen drops affect bone density. Lifting weights twice a week protects you for decades."),
      body: [
        t("articles.2.body.0", "Estrogen has been quietly protecting your bones for decades. When it drops in menopause, bone loss accelerates significantly, up to 20% of total bone density can be lost in the first 5–7 years after menopause."),
        t("articles.2.body.1", "This matters because osteoporosis affects 1 in 3 women over 50 and dramatically raises the risk of fractures. A hip fracture in older age can be life-altering. The good news: bone loss is largely modifiable."),
        t("articles.2.body.2", "Strength training is one of the most powerful tools you have. Loading bones through weight-bearing and resistance exercise tells them to stay strong. Two to three sessions a week, even 30 minutes, meaningfully protects bone density over time."),
        t("articles.2.body.3", "You don't need a gym. Bodyweight squats, lunges, push-ups, rows with a band, planks, and step-ups cover most of the body. Three rounds of 8–12 reps, twice a week, is a powerful baseline."),
        t("articles.2.body.4", "Higher-impact movement also helps when joints allow it, walking, hiking, dancing, jogging, even jumping (for those without joint issues). Yoga and pilates are excellent for balance and flexibility, which protect against falls."),
        t("articles.2.body.5", "Nutrition matters too. Aim for 1.2–1.6g of protein per kg of body weight. Get enough calcium (around 1200mg/day after 50, ideally from food, dairy, leafy greens, tofu, fortified plant milks, sardines). Vitamin D is essential for calcium absorption, most people benefit from a supplement, especially in winter or indoor lives."),
        t("articles.2.body.6", "Limit alcohol, it impairs bone health and increases fracture risk. Stop smoking. Maintain a healthy weight (very low weight is also a bone risk)."),
        t("articles.2.body.7", "Get a DEXA scan around menopause to know your baseline. From there, your clinician can guide you on whether lifestyle alone is enough or whether medication (including HRT, which protects bone) is appropriate. The earlier you start, the more you protect.")
      ]
    },
    {
      title: t("articles.3.title", "Sleep, mood and the menopause brain"),
      summary: t("articles.3.summary", "Hormonal shifts affect more than just hot flashes, and there are real solutions."),
      body: [
        t("articles.3.body.0", "Brain fog. Anxiety. Sleep that disappears at 3 a.m. Mood swings that feel like someone else is driving. Word-finding difficulty mid-sentence. These are some of the most disorienting menopause symptoms, and some of the least talked about."),
        t("articles.3.body.1", "All of them are connected to hormonal shifts. Estrogen and progesterone influence sleep architecture, mood regulation, memory, and the brain's stress response. As they fluctuate in perimenopause and drop in menopause, all of these can wobble."),
        t("articles.3.body.2", "Sleep is often the first to go. Many women describe waking at 3 a.m. wide awake, sometimes with a racing mind. Hot flashes and night sweats break sleep further. Chronic poor sleep then amplifies everything else, mood, focus, anxiety."),
        t("articles.3.body.3", "Mood symptoms in perimenopause and menopause are common and biologically real. Anxiety, irritability, and depression can all hit harder than at other life stages. They're not weakness; they're the brain responding to hormonal change."),
        t("articles.3.body.4", "Brain fog and word-finding difficulties are also real. They're usually transient and often improve after menopause stabilizes, but they can be deeply unsettling while they're happening. Most women do not develop dementia from menopause brain fog."),
        t("articles.3.body.5", "What helps: hormone therapy (HRT) is often life-changing for these symptoms, especially when started early in perimenopause. Sleep, exercise (especially strength training), nutrition, and stress care all support brain health."),
        t("articles.3.body.6", "Mental health support matters. Therapy, particularly CBT, has strong evidence for menopausal mood and sleep symptoms. SSRIs and SNRIs at low doses can help mood and even hot flashes. Don't push through alone."),
        t("articles.3.body.7", "Talk openly with the people around you. Menopause is not optional or shameful. The more women normalize talking about it, the better the next generation will be supported. You're not losing your mind, you're navigating one of the biggest hormonal transitions of your life.")
      ]
    }
  ],
  tips: [
    t("tips.0", "Cool the bedroom to 18°C for better sleep."),
    t("tips.1", "Add calcium + vitamin D daily."),
    t("tips.2", "Strength train at least twice a week."),
    t("tips.3", "Track triggers for hot flashes, patterns appear quickly."),
    t("tips.4", "Talk to a menopause-aware clinician, not just any GP."),
    t("tips.5", "Layer clothing, easier to adjust with hot flashes."),
    t("tips.6", "Limit alcohol; it worsens hot flashes and sleep."),
    t("tips.7", "Aim for 1.2–1.6g protein per kg body weight."),
    t("tips.8", "Get a DEXA scan around menopause for a bone baseline."),
    t("tips.9", "Vaginal estrogen is safe for most, ask about it."),
    t("tips.10", "Move daily; even a walk lifts mood."),
    t("tips.11", "Don't push through, therapy and HRT can transform this stage.")
  ],
  stories: [
    {
      name: t("stories.0.name", "Anya, 49"),
      quote: t("stories.0.quote", "HRT gave me back my sleep and my patience."),
      body: [
        t("stories.0.body.0", "I had been waking at 3 a.m. for nearly two years before I figured out it was perimenopause. By day, I was anxious and short-tempered with everyone I love."),
        t("stories.0.body.1", "I was scared of HRT, old headlines lived in my head. A menopause-trained doctor walked me through what we now know, what the risks actually are for someone my age and history, and what the benefits could be."),
        t("stories.0.body.2", "Within four weeks of starting a low-dose patch and progesterone, I was sleeping through the night. By eight weeks, I felt like myself again. My patience came back. My focus came back."),
        t("stories.0.body.3", "I'm not sharing this to push HRT on anyone, it's an individual decision. I'm sharing it because I almost didn't try, and it changed my life."),
        t("stories.0.body.4", "If you've been suffering through perimenopause, please find a menopause-aware doctor and have an honest conversation. The science has moved on, make sure your care has too.")
      ]
    },
    {
      name: t("stories.1.name", "Bea, 54"),
      quote: t("stories.1.quote", "Lifting weights at 50 was the best decision of my decade."),
      body: [
        t("stories.1.body.0", "I had been a runner my whole adult life. After menopause, my joints started complaining, my body shape changed, and my energy dipped. Running alone wasn't enough anymore."),
        t("stories.1.body.1", "I started lifting weights at 50, very reluctantly. Twice a week, with a coach the first three months."),
        t("stories.1.body.2", "Four years in, my body composition has changed dramatically. I'm stronger than I've been in two decades. My back pain is gone. My DEXA scan showed bone density that surprised everyone."),
        t("stories.1.body.3", "More than the physical, lifting gave me a confidence I didn't expect. I trust my body. I'm not afraid of it changing anymore."),
        t("stories.1.body.4", "If you're in your 50s and have never lifted, please start. It is not too late. Two short sessions a week. Start with bodyweight or light dumbbells. The next 30 years of your life will thank you.")
      ]
    },
    {
      name: t("stories.2.name", "Padma, 52"),
      quote: t("stories.2.quote", "Vaginal estrogen ended a decade of discomfort."),
      body: [
        t("stories.2.body.0", "I had been silently struggling with vaginal dryness, painful sex, and recurrent UTIs for years. I assumed it was just part of getting older. I was wrong."),
        t("stories.2.body.1", "A urogynecologist explained genitourinary syndrome of menopause, the umbrella term for these symptoms, and prescribed low-dose vaginal estrogen."),
        t("stories.2.body.2", "Within two months, the dryness was gone. UTIs stopped. Sex was comfortable again, the first time in over a decade."),
        t("stories.2.body.3", "I'm angry I suffered so long when this small, safe treatment existed. I'm sharing this loudly because so many women silently endure these symptoms."),
        t("stories.2.body.4", "Vaginal estrogen is local, low-dose, and safe even for many women who can't use systemic HRT. If any of these symptoms sound familiar, please ask your doctor.")
      ]
    },
    {
      name: t("stories.3.name", "Maya, 56"),
      quote: t("stories.3.quote", "Postmenopause has been my most powerful chapter."),
      body: [
        t("stories.3.body.0", "I dreaded menopause for most of my 40s. The narrative was all loss and decline."),
        t("stories.3.body.1", "The transition itself was hard, sleep issues, hot flashes, mood swings for a few years. Hormone therapy helped enormously."),
        t("stories.3.body.2", "Three years post-menopause, the picture is completely different. Hormonal turbulence is gone. My priorities are clearer. I have less patience for things that don't matter, and more energy for what does."),
        t("stories.3.body.3", "I lift weights, walk daily, eat well, sleep deeply. I feel strong. I feel free."),
        t("stories.3.body.4", "Menopause was the door, not the ending. Postmenopause is a chapter I wish someone had told me about with this much enthusiasm. There's life here. A lot of it.")
      ]
    }
  ],
  myths: [
    { myth: t("myths.0.myth", "Menopause is just hot flashes."), fact: t("myths.0.fact", "It affects sleep, mood, joints, skin, libido, the full system.") },
    { myth: t("myths.1.myth", "HRT is dangerous."), fact: t("myths.1.fact", "For most healthy people under 60, benefits outweigh risks. Ask a specialist.") },
    { myth: t("myths.2.myth", "It's all downhill from here."), fact: t("myths.2.fact", "Many describe postmenopause as their most confident, free chapter.") },
    { myth: t("myths.3.myth", "Menopause only happens in your 50s."), fact: t("myths.3.fact", "Perimenopause can start in your late 30s; early menopause is real and deserves care.") },
    { myth: t("myths.4.myth", "You can't get pregnant during perimenopause."), fact: t("myths.4.fact", "Until 12 months without a period, contraception still matters.") },
    { myth: t("myths.5.myth", "Weight gain in menopause is unavoidable."), fact: t("myths.5.fact", "Hormones make it harder, not impossible. Strength training and protein help significantly.") },
    { myth: t("myths.6.myth", "Low libido is just part of getting older."), fact: t("myths.6.fact", "It's often treatable, hormonal, lifestyle, and relationship factors all play a role.") },
    { myth: t("myths.7.myth", "Vaginal dryness is something to live with."), fact: t("myths.7.fact", "Vaginal estrogen and moisturizers are safe, simple, and life-changing.") },
    { myth: t("myths.8.myth", "Brain fog in menopause means dementia."), fact: t("myths.8.fact", "Most menopause brain fog is temporary and improves after the transition.") },
    { myth: t("myths.9.myth", "Only your gynecologist treats menopause."), fact: t("myths.9.fact", "Menopause-trained primary care doctors and specialists exist, find one who's up to date.") }
  ]
};
