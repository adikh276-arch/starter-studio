"use client";
import { t } from "@/lib/i18n-utils";
import { type ModuleContent } from "@/data/modules";

export const pregnancyPostpartumData: ModuleContent = {
  slug: "pregnancy-postpartum",
  title: t("title", "Pregnancy & Postpartum"),
  subtitle: t("subtitle", "End-to-end care for a healthy pregnancy and smooth postpartum recovery."),
  iconKey: "Baby",
  tone: "mint",
  understanding: [
    {
      label: t("understanding.0.label", "Pregnancy and Conception"),
      tone: "peach",
      body: [
        t("understanding.0.body.0", "Conception happens when sperm fertilizes an egg released during ovulation, usually around mid-cycle but actually anywhere from day 10 to day 21 depending on cycle length. The fertilized egg then travels down the fallopian tube over several days and implants in the uterine lining about 6–10 days later, which is when pregnancy technically begins."),
        t("understanding.0.body.1", "The fertile window is about six days long: the five days before ovulation and ovulation day itself. Sperm can survive up to 5 days in fertile cervical mucus, while an egg lives only 12–24 hours after release. This means timing matters far more than frequency in most cases."),
        t("understanding.0.body.2", "Tracking ovulation makes timing far easier than guessing. Cervical mucus changes (becoming clear and stretchy near ovulation), basal body temperature shifts (a small rise after ovulation), and LH ovulation strips are the most reliable signals. Apps that just count from day 14 are often wrong."),
        t("understanding.0.body.3", "Most healthy couples under 35 conceive within 6–12 months of regular, well-timed sex. After 35, the average shortens because egg quantity and quality decline more rapidly. Knowing this isn't meant to alarm, it's meant to help you plan and seek support sooner if needed."),
        t("understanding.0.body.4", "Preparing for pregnancy starts well before the positive test. Both partners benefit from a daily multivitamin or prenatal (with folate, B12, iodine, and omega-3) at least 3 months before trying, that's roughly how long it takes for a new egg or new sperm to mature."),
        t("understanding.0.body.5", "Get any chronic conditions reviewed before trying, thyroid, blood pressure, blood sugar, mental health medications, autoimmune conditions, and oral health. Adjusting now is far easier than mid-pregnancy."),
        t("understanding.0.body.6", "Lifestyle matters for both partners. Sleep, weight, alcohol, smoking, recreational drugs, environmental toxins, and stress all affect egg and sperm quality. None of this needs to be perfect, but small changes 90 days before trying make a real difference."),
        t("understanding.0.body.7", "Conception is also emotional, not just biological. Trying to conceive can be exciting, anxious, lonely, joyful, and exhausting, sometimes all in the same week. Whatever you're feeling is valid, and finding even one person to talk honestly with helps enormously."),
        t("understanding.0.body.8", "If conception is taking longer than expected, get checked early, within 12 months under 35, within 6 months over 35, sooner with known conditions. Most causes are identifiable and many are treatable; waiting often costs time you don't need to lose.")
      ]
    },
    {
      label: t("understanding.1.label", "Stages of Pregnancy"),
      tone: "blue",
      body: [
        t("understanding.1.body.0", "Pregnancy is divided into three trimesters of about 13 weeks each, counted from the first day of your last period, which means you're already considered 2 weeks pregnant on the day of conception. Most pregnancies last about 40 weeks total."),
        t("understanding.1.body.1", "The first trimester (weeks 1–13) is when nearly all of the baby's organs form, which is why this is the most sensitive period for medications, alcohol, and infections. It's often the hardest physically, fatigue can be crushing, nausea is common (the term 'morning' sickness is misleading; it can hit any time), and emotions run high."),
        t("understanding.1.body.2", "First trimester essentials: prenatal vitamins with folate, hydration, protein, gentle movement, frequent small meals to manage nausea, and rest without guilt. Most miscarriages happen in this window, which is part of why many people wait to share the news, but talking to someone you trust can ease the weight."),
        t("understanding.1.body.3", "The second trimester (weeks 14–27) often feels like a relief, energy returns, nausea usually fades, the bump becomes visible, and you may feel the baby move (typically 16–22 weeks). This is often the best window for travel, exercise, and finishing big projects."),
        t("understanding.1.body.4", "Second trimester care includes the anatomy scan (around 18–22 weeks), gestational diabetes screening (24–28 weeks), and continued check-ups. It's also a good time to start pelvic floor work, prenatal yoga or pilates, and birth education."),
        t("understanding.1.body.5", "The third trimester (weeks 28–40+) is the final stretch, the baby grows rapidly, sleep gets harder (heartburn, hip pain, frequent peeing), and Braxton Hicks contractions become more noticeable. Visits move to every two weeks, then weekly."),
        t("understanding.1.body.6", "Third trimester focus: birth preparation (classes, birth plan, hospital bag, support team), postpartum prep (meal prep, recovery supplies, mental health plan), and watching for warning signs. Iron, protein, and rest become especially important."),
        t("understanding.1.body.7", "Through all three trimesters, regular prenatal care, gentle movement, hydration, adequate protein (often 80–100g daily), sleep, and mental health check-ins are key. So is the basic permission to slow down, pregnancy is not the time to push through."),
        t("understanding.1.body.8", "Each pregnancy is different, even for the same person. Comparing yours to a friend's or to your last one rarely helps; trust your team and your body's signals."),
        t("understanding.1.body.9", "Pregnancy is unpredictable. Plans change, birth plans, due dates, energy levels, baby's position. That doesn't mean you're doing it wrong. Flexibility is the underrated superpower of pregnancy.")
      ]
    },
    {
      label: t("understanding.2.label", "Prenatal Care"),
      tone: "rose",
      body: [
        t("understanding.2.body.0", "Prenatal care is the regular cadence of check-ups, blood tests, scans, and conversations across pregnancy. Good prenatal care meaningfully reduces complications, catches issues early, and supports the mental health of the pregnant person, and it's one of the most studied predictors of healthy outcomes for both mother and baby."),
        t("understanding.2.body.1", "A typical schedule has monthly visits through week 28, every two weeks from weeks 28–36, then weekly from week 36 until delivery. Higher-risk pregnancies (advanced maternal age, twins, chronic conditions) often have more frequent visits."),
        t("understanding.2.body.2", "Early visits include confirming pregnancy, dating the pregnancy via ultrasound, baseline bloods (blood type, Rh status, immunity, iron, blood sugar, infection screening), and a thorough medical and family history."),
        t("understanding.2.body.3", "Each routine visit includes weight, blood pressure, urine sample, fundal height (measuring the uterus), and baby's heartbeat. The conversation is just as important, energy, mood, sleep, movement, nausea, and any new symptoms all matter."),
        t("understanding.2.body.4", "Key milestone tests include first-trimester screening (around 11–13 weeks), the anatomy scan (18–22 weeks), the glucose tolerance test for gestational diabetes (24–28 weeks), and Group B strep screening (35–37 weeks). Vaccines like Tdap and flu are also part of standard care."),
        t("understanding.2.body.5", "Bring questions to every visit, even small ones. Write them down beforehand, pregnancy brain is real, and once you're sitting in the chair, half of what you wanted to ask vanishes."),
        t("understanding.2.body.6", "Build your team thoughtfully. An OB, midwife, or both; a primary care doctor; potentially a doula, lactation consultant, pelvic floor physiotherapist, mental health professional, and pediatrician. You don't need everyone, but knowing who fills which gap helps."),
        t("understanding.2.body.7", "Know the warning signs that need immediate attention: severe headache that won't ease, sudden swelling of face or hands, blurred vision, persistent upper-abdominal pain, decreased fetal movement (after 28 weeks), heavy bleeding, leaking fluid, severe nausea/vomiting, fever, or signs of preterm labor."),
        t("understanding.2.body.8", "Mental health is part of prenatal care. Anxiety and depression during pregnancy are common, treatable, and worth raising at every visit. Many medications are safer than untreated illness; a perinatal mental health specialist can help weigh options."),
        t("understanding.2.body.9", "If something feels off between visits, call. Erring on the side of asking is the right call, providers expect these calls and would always rather see you for nothing than miss something serious.")
      ]
    },
    {
      label: t("understanding.3.label", "Postpartum Depression"),
      tone: "mint",
      body: [
        t("understanding.3.body.0", "Postpartum depression (PPD) is much more than the 'baby blues.' Baby blues affect up to 80% of new parents, peak around day 3–5 after birth, and resolve within two weeks on their own. PPD lingers, deepens, doesn't fade, and needs real support to lift."),
        t("understanding.3.body.1", "PPD shows up as persistent sadness, anxiety, hopelessness, irritability, intrusive thoughts (often violent or scary thoughts that horrify the person having them), trouble bonding with the baby, sleep issues that go beyond newborn sleep deprivation, appetite changes, and a sense of going through the motions of caring for the baby without feeling present."),
        t("understanding.3.body.2", "It can begin in pregnancy (perinatal depression), in the first weeks postpartum, or any time in the first year, and sometimes longer. Late-onset PPD around 6–9 months is common and often missed because everyone has stopped checking."),
        t("understanding.3.body.3", "PPD is a medical condition, not a parenting failure. It's caused by a combination of massive hormonal shifts, sleep deprivation, identity change, isolation, history of depression or anxiety, traumatic birth, feeding struggles, and lack of support, none of which are character flaws."),
        t("understanding.3.body.4", "Postpartum anxiety is just as common as PPD and often coexists. It looks like racing thoughts, constant worry about the baby's safety, panic attacks, and inability to sleep even when the baby is sleeping. It's also very treatable."),
        t("understanding.3.body.5", "Postpartum OCD (intrusive thoughts about harm coming to the baby, often with checking behaviors), postpartum PTSD (after a traumatic birth experience), and rarely postpartum psychosis (a medical emergency with hallucinations, delusions, and severe disorientation) are also part of this picture."),
        t("understanding.3.body.6", "PPD is one of the most treatable mental health conditions. Therapy (especially CBT and IPT), medication (many SSRIs are compatible with breastfeeding), peer support, sleep protection, practical help, and movement all work. Most people improve significantly within months."),
        t("understanding.3.body.7", "Partners and people who don't give birth can also experience postpartum depression, often missed because the focus is on the birthing parent. If you're supporting someone with a new baby and you feel low or detached, that counts too."),
        t("understanding.3.body.8", "Telling a clinician, even with one sentence ('I'm not okay'), opens the door. Most providers screen at the 6-week check, but you can raise it any time, and you should if you suspect it."),
        t("understanding.3.body.9", "Reach out urgently if you're having thoughts of harming yourself or the baby, hearing voices, feeling disconnected from reality, or unable to care for yourself. These are emergencies and they have effective treatment. You are not the only one who has felt this; you do not have to face it alone.")
      ]
    }
  ],
  articles: [
    {
      title: t("articles.0.title", "The first trimester, honestly"),
      summary: t("articles.0.summary", "Fatigue and nausea are real work. Rest is productive. Snacks are medicine."),
      body: [
        t("articles.0.body.0", "The first trimester is famously the hardest for most people, and the least visible. You haven't told most of the world. Your body looks the same. But internally, your hormones are doing astonishing work, and it costs energy."),
        t("articles.0.body.1", "Fatigue can be crushing. It's not laziness. Your body is building a placenta, growing a tiny human's organs, and adapting nearly every system to support the pregnancy."),
        t("articles.0.body.2", "Nausea, so-called 'morning sickness', can hit any time of day. For some, it's a few weeks of mild queasiness. For others, it's months of debilitating sickness that affects work, relationships, and quality of life. Severe nausea (hyperemesis gravidarum) deserves medical care, not dismissal."),
        t("articles.0.body.3", "What helps: small frequent meals, foods you can keep down (often bland, cold, salty, or carb-based), staying hydrated in tiny sips, lemon and ginger, vitamin B6, prescription anti-nausea medication when needed. Don't suffer silently, there are real options."),
        t("articles.0.body.4", "Emotionally, the first trimester is a strange mix. Excitement, fear, grief for life-as-it-was, hope, anxiety about miscarriage. All of these can coexist. None of them mean you're a bad parent-to-be."),
        t("articles.0.body.5", "Take your prenatal vitamin daily, especially folic acid (400–800 mcg), iodine, and DHA. Avoid alcohol, smoking, raw fish, unpasteurized cheese, and limit caffeine."),
        t("articles.0.body.6", "Rest is doing real work. Sleep when you can. Say no to what you can. Ask for help where possible."),
        t("articles.0.body.7", "And remember: this trimester is temporary. Many people feel dramatically better by week 14–16. You're not broken, you're growing a human.")
      ]
    },
    {
      title: t("articles.1.title", "Building your birth team"),
      summary: t("articles.1.summary", "Knowing who does what reduces stress on the day."),
      body: [
        t("articles.1.body.0", "Birth is a team sport, even if you're the one doing the work. The team you build can dramatically shape your experience, physically, emotionally, and after."),
        t("articles.1.body.1", "Start with your medical lead. That's typically an obstetrician (OB) or a midwife, depending on your country, your risk factors, and your preferences. Both can be excellent. The right choice depends on what you want from your care."),
        t("articles.1.body.2", "A doula is a non-medical birth companion who supports you emotionally, physically, and informationally throughout pregnancy and birth. Research consistently shows that doula support is linked to shorter labors, fewer interventions, and higher satisfaction with the birth experience."),
        t("articles.1.body.3", "A partner, romantic, family, or friend, is part of the team too. They benefit enormously from being part of prenatal classes and discussions, not just along for the ride. Their role on the day matters."),
        t("articles.1.body.4", "Other people who can support you: a lactation consultant (book one before birth, not after), a pelvic floor physiotherapist (essential postpartum, regardless of how you give birth), a postpartum doula, a therapist who specializes in perinatal mental health."),
        t("articles.1.body.5", "Your wider support, family, friends, community, also belongs in this picture. Who can bring food in the first weeks? Who can hold the baby while you shower? Who will check in honestly?"),
        t("articles.1.body.6", "Discuss preferences with your team in advance. A birth plan isn't a guarantee, it's a conversation starter. What matters most to you? Movement during labor? Pain management options? Who you want in the room?"),
        t("articles.1.body.7", "And accept that birth, like life, can change quickly. The best preparation is a flexible plan, a team that knows you, and trust in your own ability to make decisions in the moment.")
      ]
    },
    {
      title: t("articles.2.title", "Postpartum is a fourth trimester"),
      summary: t("articles.2.summary", "Healing takes months, not weeks. Asking for help is part of the plan."),
      body: [
        t("articles.2.body.0", "The first three months after birth are sometimes called the 'fourth trimester.' It's an apt name. The baby is adjusting to life outside the womb. The birthing parent is healing physically, recalibrating hormonally, and being remade emotionally."),
        t("articles.2.body.1", "Recovery from birth, vaginal or cesarean, takes months, not weeks. Tissue healing takes 6–8 weeks at minimum. Pelvic floor recovery often takes 6–12 months. Hormonal rebalancing takes its own time, especially while breastfeeding."),
        t("articles.2.body.2", "Sleep deprivation is the dominant feature for most. Newborns wake every 2–3 hours around the clock. That's not a phase you push through, it's a survival situation. Take help where you can. Sleep when the baby sleeps, even badly, even briefly."),
        t("articles.2.body.3", "Postpartum mental health is its own arena. Up to 80% experience baby blues, tearful, overwhelmed feelings that lift in two weeks. Postpartum depression, anxiety, OCD, and PTSD all exist. Hormonal shifts after delivery, sleep deprivation, and identity change combine into real risk. All are treatable."),
        t("articles.2.body.4", "Physical care often gets neglected. Eat enough, undereating in postpartum is a fast track to milk supply issues, mood crashes, and exhaustion. Hydrate, especially when breastfeeding. Take your postnatal vitamin."),
        t("articles.2.body.5", "Pelvic floor physiotherapy is for everyone postpartum, not just for complications. A good physio assesses healing, addresses incontinence, prolapse, and diastasis recti, and helps you safely return to movement."),
        t("articles.2.body.6", "Ask for help, practically and emotionally. Meals brought over. A friend who holds the baby while you shower. A partner who genuinely shares the load. A therapist who normalizes what you're feeling."),
        t("articles.2.body.7", "And lower the bar. The goal in the fourth trimester is not to bounce back. It's to recover, to bond, and to slowly find your footing in a body and life that have permanently changed.")
      ]
    },
    {
      title: t("articles.3.title", "Feeding your baby, and yourself"),
      summary: t("articles.3.summary", "Breast, bottle, or both, what matters most is a fed baby and a supported parent."),
      body: [
        t("articles.3.body.0", "Few topics carry more guilt and pressure in early parenthood than feeding. The truth is simpler than the noise: a fed baby is the goal, and a supported parent is what makes it sustainable."),
        t("articles.3.body.1", "Breastfeeding has many benefits, but it's also a learned skill, not an automatic one. Latching, supply, positioning, and pain all take time and often professional help. A lactation consultant in the first week can prevent weeks of struggle."),
        t("articles.3.body.2", "Common challenges include sore nipples, low or oversupply, mastitis, blocked ducts, tongue tie, and reflux. Most are solvable with good support. Suffering through pain is not noble, it's a sign to ask for help."),
        t("articles.3.body.3", "Pumping and bottle-feeding breastmilk is breastfeeding. Combination feeding is breastfeeding. Exclusive formula feeding is feeding. None of these make you a better or worse parent."),
        t("articles.3.body.4", "If breastfeeding isn't working, for medical, mental health, supply, or any other reason, formula is a healthy, complete option. The pressure to push through at the cost of your wellbeing is misplaced."),
        t("articles.3.body.5", "Your own nutrition matters enormously postpartum, especially while breastfeeding. You need 400–500 extra calories a day, plenty of protein, healthy fats, fluid, and continued prenatal-style supplementation."),
        t("articles.3.body.6", "Hydration is non-negotiable for milk supply. Keep a water bottle wherever you feed."),
        t("articles.3.body.7", "Mental health and feeding are tied. Sleep deprivation, hormonal shifts, and feeding pressure can fuel postpartum depression and anxiety. If feeding is dominating your mental health, that's a sign to get support, both for feeding itself and for how you're doing as a person.")
      ]
    }
  ],
  tips: [
    t("tips.0", "Drink water like it's your job, every trimester."),
    t("tips.1", "Walk daily if your provider okays it; even 10 minutes counts."),
    t("tips.2", "Prep freezer meals in the third trimester."),
    t("tips.3", "Sleep when the baby sleeps, even badly, even briefly."),
    t("tips.4", "Pelvic floor PT after birth is for everyone, not just complications."),
    t("tips.5", "Take folic acid (400–800 mcg) before and through pregnancy."),
    t("tips.6", "Book a lactation consultant in the first week, not the third."),
    t("tips.7", "Don't compare your bump to anyone else's."),
    t("tips.8", "Eat protein at every meal in pregnancy and postpartum."),
    t("tips.9", "Tell your provider about mood, even one sentence."),
    t("tips.10", "Accept help. Meals, holding the baby, school runs."),
    t("tips.11", "Limit caffeine to 200mg/day in pregnancy.")
  ],
  stories: [
    {
      name: t("stories.0.name", "Noor, 30"),
      quote: t("stories.0.quote", "Telling my partner exactly what I needed was harder than labor itself, and worth it."),
      body: [
        t("stories.0.body.0", "I had a beautiful labor and a brutal first month postpartum. The shift from 'us' to 'us with a tiny boss' was harder than anything I had read about prepared me for."),
        t("stories.0.body.1", "I assumed my partner would just know what I needed. He's a thoughtful person. Surely he'd see I was drowning?"),
        t("stories.0.body.2", "He didn't. He was drowning too, in his own way. Both of us were silently waiting for the other to notice."),
        t("stories.0.body.3", "At about week three, I sat down and made a list. Specific things. 'I need you to do the night feed at 2 a.m. on Tuesdays and Thursdays.' 'I need 30 minutes alone in the morning.' 'I need you to ask how I'm doing without me having to bring it up.'"),
        t("stories.0.body.4", "It felt awkward and almost rude. He cried. He said: 'Thank you. I had no idea.'"),
        t("stories.0.body.5", "We're still figuring out parenting. But asking specifically, over and over, has been the single biggest thing that's saved our marriage and my sanity.")
      ]
    },
    {
      name: t("stories.1.name", "Fara, 34"),
      quote: t("stories.1.quote", "Therapy at 6 weeks postpartum saved my mental health."),
      body: [
        t("stories.1.body.0", "I had been so prepared for the physical recovery. I had not prepared for the way my brain would feel."),
        t("stories.1.body.1", "Around four weeks postpartum, I started having intrusive thoughts that scared me. I couldn't sleep even when the baby slept. I cried daily. I told no one."),
        t("stories.1.body.2", "At my six-week check, the midwife asked me a direct question: 'How are you, really?' I started sobbing and couldn't stop."),
        t("stories.1.body.3", "She referred me to a perinatal mental health therapist that same week. She also helped me start a low-dose medication that's safe with breastfeeding."),
        t("stories.1.body.4", "Within three weeks, the fog lifted. I could feel things again. The intrusive thoughts faded."),
        t("stories.1.body.5", "I tell every new parent I know now: the postpartum mental health visit is not optional. Tell your provider the truth, even if it's hard. Help exists, and it works fast when you ask.")
      ]
    },
    {
      name: t("stories.2.name", "Anika, 32"),
      quote: t("stories.2.quote", "Pelvic floor physio in the fourth trimester gave me my body back."),
      body: [
        t("stories.2.body.0", "I had a vaginal birth with no major complications. I was told I'd be 'back to normal' by six weeks. At twelve weeks, I was leaking when I sneezed and felt like everything down there had shifted."),
        t("stories.2.body.1", "I asked for a pelvic floor physio referral. The first session was eye-opening, I had pelvic floor weakness and a small diastasis recti that nobody had checked."),
        t("stories.2.body.2", "Eight weeks of focused exercises later, the leaking was gone. My core felt like mine again. Sex was comfortable."),
        t("stories.2.body.3", "I'm shocked this isn't standard postpartum care everywhere. It should be. Every birthing person deserves a pelvic floor assessment in the first few months."),
        t("stories.2.body.4", "If you're postpartum at any timeline, six weeks or six years, it's not too late. Find a pelvic floor physio. It's some of the best money I've ever spent.")
      ]
    },
    {
      name: t("stories.3.name", "Ravi, 38"),
      quote: t("stories.3.quote", "I didn't know dads could have postpartum depression too."),
      body: [
        t("stories.3.body.0", "When my daughter was three months old, I was struggling. I assumed it was just exhaustion and the new role. But it kept getting worse, flat mood, irritability, no joy in things I used to love, dread when I came home."),
        t("stories.3.body.1", "I read an article about paternal postpartum depression and recognized myself in every line. Up to 1 in 10 fathers experience it. I had no idea."),
        t("stories.3.body.2", "I told my GP. He was kind, took it seriously, and referred me to a therapist. Talking helped. So did sleep when I could get it, and rejoining a sport I loved."),
        t("stories.3.body.3", "I'm sharing this because nobody told me. Partners, of any gender, can struggle deeply postpartum. It doesn't make you a bad parent. It means you need support too."),
        t("stories.3.body.4", "Don't wait it out. Talk to someone. Your family deserves a present version of you, and you deserve to feel like yourself again.")
      ]
    }
  ],
  myths: [
    { myth: t("myths.0.myth", "You're eating for two."), fact: t("myths.0.fact", "You need ~300 extra calories in the second trimester, ~450 in the third.") },
    { myth: t("myths.1.myth", "Bouncing back is the goal."), fact: t("myths.1.fact", "Healing is the goal. Bodies change, that's biology, not failure.") },
    { myth: t("myths.2.myth", "Baby blues and PPD are the same."), fact: t("myths.2.fact", "Blues lift in 2 weeks. PPD doesn't and deserves real support.") },
    { myth: t("myths.3.myth", "You can't exercise while pregnant."), fact: t("myths.3.fact", "Most people can, and should, keep moving. Talk to your provider about what fits you.") },
    { myth: t("myths.4.myth", "Morning sickness only happens in the morning."), fact: t("myths.4.fact", "It can hit any time of day. The name is misleading.") },
    { myth: t("myths.5.myth", "You can't take any medication while pregnant."), fact: t("myths.5.fact", "Many are safe and necessary, never stop without talking to your doctor.") },
    { myth: t("myths.6.myth", "C-sections are the easy way out."), fact: t("myths.6.fact", "Major abdominal surgery is never easy. Every birth deserves respect.") },
    { myth: t("myths.7.myth", "Only mothers get postpartum depression."), fact: t("myths.7.fact", "Up to 1 in 10 fathers experience it too.") },
    { myth: t("myths.8.myth", "If you don't breastfeed, you're failing."), fact: t("myths.8.fact", "Fed is the goal. Formula and combination feeding are healthy choices.") }
  ]
};
