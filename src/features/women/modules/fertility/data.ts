"use client";
import { t } from "@/features/women/lib/i18n-utils";
import { type ModuleContent } from "@/features/women/data/modules";

export const fertilityData: ModuleContent = {
  slug: "fertility",
  title: t("title", "Fertility"),
  subtitle: t("subtitle", "Guidance and treatments to support your journey to conception."),
  iconKey: "Sprout",
  tone: "rose",
  understanding: [
    {
      label: t("understanding.0.label", "Understanding Ovulation & Fertility"),
      tone: "peach",
      body: [
        t("understanding.0.body.0", "Ovulation is the moment a mature egg is released from the ovary, usually 12–16 days before your next period starts. It is the central event of the cycle, without ovulation, the rest of the hormonal rhythm doesn't fall into place, and conception isn't possible."),
        t("understanding.0.body.1", "The fertile window is about six days long, the five days before ovulation and ovulation day itself. Sex earlier in this window often gives the highest chance of conception because sperm are already waiting when the egg arrives."),
        t("understanding.0.body.2", "Sperm can survive up to 5 days in fertile cervical mucus; an egg lives only 12–24 hours after release. This asymmetry is why timing matters so much, and why 'just having more sex' isn't always the answer when timing is off."),
        t("understanding.0.body.3", "Tracking ovulation with cervical mucus changes (clear, stretchy, egg-white-like near ovulation), basal body temperature (a small sustained rise after ovulation), and LH ovulation strips is far more accurate than counting from day 14. Apps that only count days are often wrong, especially for irregular cycles."),
        t("understanding.0.body.4", "Cycle length varies normally between 21 and 35 days, and ovulation timing varies with it. A 35-day cycle ovulates around day 21, not day 14, a mismatch that costs many couples months of mistimed effort."),
        t("understanding.0.body.5", "Some cycles don't ovulate at all (anovulatory cycles), that's not always a problem unless it's persistent. Stress, illness, travel, intense training, and weight changes can all temporarily skip ovulation. Repeated anovulation deserves a workup."),
        t("understanding.0.body.6", "Signs of healthy ovulation include regular cycles, mid-cycle cervical mucus changes, sometimes a small twinge on one side (mittelschmerz), and a slight rise in libido around ovulation. Tracking these makes your own cycle far less mysterious."),
        t("understanding.0.body.7", "Egg quantity and quality both decline with age, faster after 35 and sharply after 40, but the curve is gradual, not a cliff. Knowing this helps with planning, not panicking."),
        t("understanding.0.body.8", "Understanding your fertile window is power, for trying to conceive, for avoiding pregnancy without hormonal contraception, and for understanding the rhythms of energy, mood, and libido that move through your cycle every month.")
      ]
    },
    {
      label: t("understanding.1.label", "Fertility Made Simple"),
      tone: "blue",
      body: [
        t("understanding.1.body.0", "Fertility depends on egg quality and quantity, sperm quality (count, motility, and shape), open and healthy fallopian tubes, hormonal balance (thyroid, prolactin, insulin, sex hormones), and a uterus capable of supporting implantation. Any one of these can be the bottleneck."),
        t("understanding.1.body.1", "Both partners contribute roughly equally to fertility outcomes. Roughly a third of cases trace primarily to the egg side, a third to the sperm side, and a third are combined or unexplained. Yet sperm is still tested far less often, far later, which costs time."),
        t("understanding.1.body.2", "Age is the single biggest factor in egg quantity and quality. Fertility declines gradually through the 30s and more steeply after 40. Sperm quality also declines with age, especially after 45, though more slowly."),
        t("understanding.1.body.3", "Most healthy couples under 35 conceive within 6–12 months of regular, well-timed sex. Over 35, the average shortens. These are averages, not deadlines, but they're useful benchmarks for when to ask for help."),
        t("understanding.1.body.4", "Lifestyle, sleep, weight, stress, alcohol, smoking, recreational drugs, environmental exposures, affects both partners. None of these need to be perfect, but they shift the odds, and the 90 days before conception are when the changes matter most (because that's how long it takes a new egg or sperm to mature)."),
        t("understanding.1.body.5", "Some conditions need targeted help, PCOS (often responds to ovulation induction), endometriosis (may need surgery or IVF), low sperm count, blocked tubes, fibroids, thyroid disorders, premature ovarian insufficiency. None of these mean you can't have children; most have well-established treatment paths."),
        t("understanding.1.body.6", "Stress affects fertility, but not in the way most people fear. Chronic high stress can delay ovulation, but the idea that 'just relaxing' will fix infertility is a myth that has caused real harm. Stress management helps; it isn't a treatment."),
        t("understanding.1.body.7", "Mental health during fertility journeys deserves attention. The grief of trying and not conceiving, the strain on relationships, and the exhaustion of medical appointments are real, therapy and peer support are part of fertility care, not extras."),
        t("understanding.1.body.8", "Getting tested early prevents wasted years. Many fertility issues are easier to treat when caught early; some, like declining ovarian reserve, are time-sensitive. Knowing where you stand is empowering, even if you're not ready to act yet.")
      ]
    },
    {
      label: t("understanding.2.label", "Boost Your Fertility"),
      tone: "rose",
      body: [
        t("understanding.2.body.0", "Both partners benefit from a daily multivitamin or prenatal at least 3 months before trying. For the partner producing eggs, look for folate (methylfolate is well-absorbed), B12, vitamin D, iodine, choline, and omega-3s. For the partner producing sperm, zinc, selenium, CoQ10, and antioxidants matter."),
        t("understanding.2.body.1", "Eat for fertility, steady protein at every meal, healthy fats (olive oil, avocado, fatty fish, nuts), complex carbs, and lots of color from vegetables and fruit. The Mediterranean pattern has the most evidence for fertility outcomes in both partners."),
        t("understanding.2.body.2", "Limit alcohol; ideally avoid it during the trying-to-conceive window. Alcohol affects egg quality, sperm quality, and early embryo development. Both partners benefit from cutting back."),
        t("understanding.2.body.3", "Stop smoking, it ages eggs, damages sperm DNA, and significantly reduces success rates with both natural conception and IVF. Vaping is not a safe substitute. Support to quit is medical care, not weakness."),
        t("understanding.2.body.4", "Manage caffeine, under 200mg/day (about one large coffee) is generally considered reasonable while trying and during pregnancy."),
        t("understanding.2.body.5", "Move regularly but avoid excessive endurance training. Too much intense cardio can suppress ovulation and lower sperm count. Walking, strength training, yoga, and moderate exercise support fertility; ultra-marathon training may not."),
        t("understanding.2.body.6", "Aim for a body weight your body settles at with steady habits. Both very low and very high body fat affect ovulation and sperm quality, but the obsessive pursuit of a 'fertility weight' often backfires. Steady habits matter more than the number."),
        t("understanding.2.body.7", "Sleep is non-negotiable, short or disrupted sleep affects ovulation, hormone balance, and sperm quality. Seven to nine hours, consistent timing, dark cool room."),
        t("understanding.2.body.8", "Reduce easy environmental exposures, fragrance-free skincare, glass instead of plastic for hot food, BPA-free containers, filtered water if you can. Don't make this a source of anxiety; do the easy swaps and move on."),
        t("understanding.2.body.9", "Track your cycle for at least 2–3 months before starting. Knowing your true ovulation day saves months of mistimed effort and gives any specialist a clearer starting point if you need help.")
      ]
    },
    {
      label: t("understanding.3.label", "When to See a Specialist"),
      tone: "mint",
      body: [
        t("understanding.3.body.0", "Under 35 trying for 12 months without success: see a fertility specialist. The 12-month threshold reflects the average; if it's stressing you out, you're allowed to ask for a workup sooner."),
        t("understanding.3.body.1", "Over 35 trying for 6 months: see a specialist sooner. After 40, consider going at 3 months. Time is one of the most important variables in fertility, and waiting often costs more than asking."),
        t("understanding.3.body.2", "Known conditions warrant a workup at the start, not after a year of trying: PCOS, endometriosis, irregular or absent cycles, previous miscarriages (especially two or more), pelvic surgery history, thyroid disorders, or known male-factor issues."),
        t("understanding.3.body.3", "Both partners should be tested. Sperm analysis is one of the simplest and most informative tests in fertility, and yet it's still often skipped or delayed. Testing both partners early gives the fastest path to answers."),
        t("understanding.3.body.4", "A standard workup includes hormone panels (FSH, LH, estradiol, AMH, thyroid, prolactin), ovarian reserve testing (AMH and antral follicle count), pelvic ultrasound, semen analysis, and sometimes tubal imaging (HSG or sono-HSG)."),
        t("understanding.3.body.5", "Treatment options range widely: timed intercourse with monitoring, ovulation induction (letrozole, clomid), intrauterine insemination (IUI), in vitro fertilization (IVF), donor eggs or sperm, surrogacy, and adoption. A good specialist explains the full menu, not just one option."),
        t("understanding.3.body.6", "Egg freezing is worth a conversation in your early-to-mid 30s if you're not ready to try yet. The earlier the freeze, the better the egg quality and the higher the future success rate."),
        t("understanding.3.body.7", "Mental health support during fertility care is essential, therapists who specialize in reproductive mental health, peer support groups, and honest communication with your partner all matter. The emotional load is real."),
        t("understanding.3.body.8", "Don't wait quietly when something feels off. A second opinion is always reasonable, especially in fertility, where clinics and approaches vary widely."),
        t("understanding.3.body.9", "A specialist can shorten months of guessing into a clear plan, and a clear plan, even if the news is hard, is almost always better than the limbo of not knowing.")
      ]
    }
  ],
  articles: [
    {
      title: t("articles.0.title", "Knowing your fertile window"),
      summary: t("articles.0.summary", "It's roughly the 5 days before ovulation plus ovulation day."),
      body: [
        t("articles.0.body.0", "Most people are taught they ovulate on day 14 of a 28-day cycle. That's a useful starting point but a poor truth. Ovulation timing varies between people and from cycle to cycle, and treating it as fixed leads to a lot of mistimed conception attempts."),
        t("articles.0.body.1", "Your fertile window is the six days that include the five days before ovulation and ovulation day itself. Sperm can survive in the reproductive tract for up to five days. The egg lives 12–24 hours after release. Conception is possible across this window, with the days right before ovulation being the most likely."),
        t("articles.0.body.2", "Three signs together identify your fertile window with high accuracy."),
        t("articles.0.body.3", "Cervical mucus is the single most reliable signal. As you approach ovulation, mucus shifts from sticky or absent to creamy, then to clear, slippery, and stretchy, like raw egg white. This 'fertile mucus' helps sperm survive and travel. When you see it, you're in your fertile window."),
        t("articles.0.body.4", "LH strips (urine ovulation tests) detect the surge in luteinizing hormone that triggers ovulation. A positive test usually means ovulation will happen in the next 12–36 hours."),
        t("articles.0.body.5", "Basal body temperature (BBT), your temperature first thing in the morning, rises by about 0.3°C after ovulation. BBT confirms ovulation has happened, but it's after the fact. Useful for tracking patterns over months, not for catching the window in real time."),
        t("articles.0.body.6", "For most couples trying to conceive, sex every 2–3 days from a few days after your period until you confirm ovulation covers the window without obsessive timing. Couples who track and time precisely don't always conceive faster, relaxed regularity often wins."),
        t("articles.0.body.7", "If your cycles are very irregular or you have conditions like PCOS, signs may be harder to read. A fertility-aware clinician can help you interpret your patterns.")
      ]
    },
    {
      title: t("articles.1.title", "Lifestyle and conception"),
      summary: t("articles.1.summary", "Sleep, stress, and steady nutrition matter for both partners."),
      body: [
        t("articles.1.body.0", "Fertility is a team sport, even though most lifestyle advice is aimed at the person trying to get pregnant. Both partners contribute roughly equally to outcomes, and both benefit from the same basics."),
        t("articles.1.body.1", "Sleep is foundational. Short sleep disrupts ovulation in women and lowers sperm count and quality in men. Aim for 7–9 hours, on a consistent schedule, in a cool dark room."),
        t("articles.1.body.2", "Nutrition matters for both. Steady protein, healthy fats, plenty of vegetables, fruit, whole grains, and limited ultra-processed foods support egg and sperm quality. Mediterranean-style eating has the strongest evidence for fertility."),
        t("articles.1.body.3", "Specific nutrients to focus on: folate (400–800 mcg of folic acid for women, food folate for men), iron, B12, vitamin D, omega-3s, zinc (especially for sperm), CoQ10 (for both), and antioxidants."),
        t("articles.1.body.4", "Both partners should take a daily multivitamin or prenatal at least three months before trying. Sperm and eggs both take roughly three months to mature, so changes today affect the cells available to conceive in three months."),
        t("articles.1.body.5", "Limit alcohol, ideally avoid it while trying. Alcohol affects ovulation, hormonal balance, and sperm quality. Even modest drinking reduces fertility."),
        t("articles.1.body.6", "Stop smoking. It ages eggs, lowers sperm count, increases miscarriage risk, and reduces success of fertility treatments. Quitting at any point helps."),
        t("articles.1.body.7", "Manage caffeine to under 200mg a day (about one strong coffee). Limit recreational drugs. Manage chronic conditions like thyroid, diabetes, and hypertension."),
        t("articles.1.body.8", "Stress and weight matter, but with nuance. Severe under-eating and over-exercising can disrupt ovulation. Significant excess weight can affect both partners. Moderate stress is fine, extreme chronic stress is the issue."),
        t("articles.1.body.9", "Most importantly: don't blame yourself if conception takes time. Even with everything 'right,' conception is a chance event each month.")
      ]
    },
    {
      title: t("articles.2.title", "When to seek a specialist"),
      summary: t("articles.2.summary", "Under 35 trying for 12 months, or over 35 trying for 6, get a workup."),
      body: [
        t("articles.2.body.0", "Many couples wait too long to seek help, hoping the next month will be 'the one.' Time matters in fertility, especially after 35. Knowing when to ask for a workup can save months or years."),
        t("articles.2.body.1", "If you're under 35 and have been having unprotected, well-timed sex for 12 months without conceiving, see a fertility specialist. If you're over 35, that timeline shortens to 6 months. Over 40, see someone after 3 months."),
        t("articles.2.body.2", "Don't wait the full timeline if you have known issues: PCOS, endometriosis, very irregular cycles, history of pelvic infection, previous miscarriages, known low sperm count, or a partner with a relevant medical history. Get assessed at the start."),
        t("articles.2.body.3", "A standard fertility workup is more thorough than people expect. For the female partner: hormone panel (including AMH for ovarian reserve), thyroid, prolactin, an ultrasound, and often an HSG (an X-ray to check the fallopian tubes are open)."),
        t("articles.2.body.4", "For the male partner: semen analysis is the cornerstone, plus sometimes hormonal testing. About a third of fertility issues are male factor, testing both is essential, not optional."),
        t("articles.2.body.5", "Don't be surprised if 'unexplained infertility' is a finding. Up to a quarter of couples have no clear cause despite a full workup. That doesn't mean nothing can be done, it just means the path forward focuses on optimizing what you can."),
        t("articles.2.body.6", "Treatment options range from timed intercourse and ovulation induction to IUI (intrauterine insemination) to IVF (in vitro fertilization). The right path depends on your specific situation, age, and cause."),
        t("articles.2.body.7", "Going early doesn't lock you into aggressive treatment. It just gives you information and time. The worst case is finding out earlier rather than later.")
      ]
    },
    {
      title: t("articles.3.title", "The emotional side of trying"),
      summary: t("articles.3.summary", "The wait is real work, for both partners."),
      body: [
        t("articles.3.body.0", "Trying to conceive is one of the most emotionally heavy experiences many people will go through, and it's almost completely invisible. From the outside, you look the same. Inside, every cycle is a quiet wave of hope, waiting, and grief."),
        t("articles.3.body.1", "The two-week wait between ovulation and your next period can feel endless. Every twinge is a possible sign. Every negative test is a small loss. This is normal, and it's exhausting."),
        t("articles.3.body.2", "Both partners often experience this differently. One may want to talk constantly. The other may withdraw. Neither is wrong. Communicating about how you're each coping, without trying to fix each other, protects the relationship."),
        t("articles.3.body.3", "Loss is part of the journey for many. Miscarriage, chemical pregnancies, and failed cycles are common and rarely talked about. Each is a real loss, even when others minimize it. Grieve as fully as you need."),
        t("articles.3.body.4", "Be careful with social media and social comparisons. Pregnancy announcements from friends can hit hard. It's okay to mute, unfollow, or take breaks. Protecting your peace is not bitterness."),
        t("articles.3.body.5", "Find your people. Online communities, support groups, friends who've been through it, or a therapist who specializes in fertility can help carry the weight. You don't have to do this alone."),
        t("articles.3.body.6", "Couples counseling is wonderful even, especially, when nothing is 'wrong.' Having a third party to navigate the emotional terrain together can keep the relationship strong through a hard chapter."),
        t("articles.3.body.7", "Finally, give yourself permission to step back when you need to. Taking a break from trying, from tracking, from treatment, is not failure. It's wisdom. The journey is long, and you matter as much as the outcome.")
      ]
    }
  ],
  tips: [
    t("tips.0", "Track ovulation with mucus + LH strips for the clearest picture."),
    t("tips.1", "Both partners benefit from a daily multivitamin."),
    t("tips.2", "Limit alcohol while trying."),
    t("tips.3", "Sex every 2–3 days through your fertile window beats perfect timing."),
    t("tips.4", "Be kind to yourself. The wait is the hardest part."),
    t("tips.5", "Sleep 7–9 hours a night, both partners."),
    t("tips.6", "Take folic acid (400–800 mcg) for at least 3 months before trying."),
    t("tips.7", "Quit smoking, it affects egg and sperm quality."),
    t("tips.8", "Move regularly but avoid excessive endurance training."),
    t("tips.9", "Don't wait 12 months if you have known issues, get tested early."),
    t("tips.10", "Ask for a male partner workup too, about 1/3 of cases are male factor."),
    t("tips.11", "Take breaks from tracking when it gets heavy.")
  ],
  stories: [
    {
      name: t("stories.0.name", "Jen, 34"),
      quote: t("stories.0.quote", "Three months of tracking taught me more than a year of guessing."),
      body: [
        t("stories.0.body.0", "We had been 'trying' for almost a year before I started actually tracking. Like most people, I assumed I ovulated around day 14 of my cycle."),
        t("stories.0.body.1", "After three months of cervical mucus checks and LH strips, I realized I was ovulating around day 20 most cycles. We had been mistiming sex by a week."),
        t("stories.0.body.2", "We adjusted. I conceived two cycles later."),
        t("stories.0.body.3", "I'm not saying tracking is the answer for everyone, fertility is more complicated than that. But the assumption that everyone ovulates on day 14 cost us months of frustration."),
        t("stories.0.body.4", "If you're trying, please track. It's free, simple, and it might just save you a lot of waiting.")
      ]
    },
    {
      name: t("stories.1.name", "Sana, 37"),
      quote: t("stories.1.quote", "IVF wasn't plan A. It became our story, and we're okay with that."),
      body: [
        t("stories.1.body.0", "We started trying at 34. After 18 months of nothing, and eventually a workup that showed both endometriosis and low ovarian reserve, we ended up at IVF."),
        t("stories.1.body.1", "I grieved a lot in that journey. The version of conception I had imagined didn't happen. Each round of IVF was physically and emotionally heavy."),
        t("stories.1.body.2", "Round three worked. Our daughter is two now."),
        t("stories.1.body.3", "What I wish someone had told me earlier: don't see IVF as a failure of plan A. It's just a different route to the same place. The science is incredible. The emotional cost is real but survivable."),
        t("stories.1.body.4", "We're considering trying again, naturally or with our remaining frozen embryos. Either way is okay with me now. The path matters less than the destination.")
      ]
    },
    {
      name: t("stories.2.name", "Riya, 31"),
      quote: t("stories.2.quote", "Quitting alcohol was the change I didn't expect to make a difference."),
      body: [
        t("stories.2.body.0", "We had been trying for eight months. I was eating well, exercising, sleeping. The one thing I hadn't changed was my evening glass of wine, sometimes two."),
        t("stories.2.body.1", "My GP suggested cutting it out completely while trying. I rolled my eyes a bit. I drank moderately."),
        t("stories.2.body.2", "Three months alcohol-free, my cycles regulated more clearly. My PMS eased. I conceived in the fourth month."),
        t("stories.2.body.3", "I can't prove it was the alcohol. But the timing was striking. And honestly, my mood and sleep were better off it too."),
        t("stories.2.body.4", "If you've been trying with no luck and are still drinking even moderately, it may be worth a real break. It's just a few months of your life.")
      ]
    },
    {
      name: t("stories.3.name", "Diya, 36"),
      quote: t("stories.3.quote", "We tested early and saved ourselves a year of wondering."),
      body: [
        t("stories.3.body.0", "I was 35 when we started trying. After only four months of nothing, I asked my GP for a workup. She gently suggested waiting until six months."),
        t("stories.3.body.1", "I pushed back politely. I wanted to know what I was working with, not wait blindly."),
        t("stories.3.body.2", "The workup showed I had a thyroid issue I hadn't known about, and my partner had a borderline-low sperm count."),
        t("stories.3.body.3", "We treated both. Three months later, we conceived."),
        t("stories.3.body.4", "If we'd waited the full year, I'd have spent that year worrying instead of treating. Don't be afraid to ask for testing earlier than the textbook says, especially over 35. Information is not impatience.")
      ]
    }
  ],
  myths: [
    { myth: t("myths.0.myth", "Stress causes infertility."), fact: t("myths.0.fact", "Stress is hard but rarely the sole cause. Don't add guilt to grief.") },
    { myth: t("myths.1.myth", "You can wait until 40 with no impact."), fact: t("myths.1.fact", "Egg quantity and quality decline with age, knowledge is power.") },
    { myth: t("myths.2.myth", "Infertility is a woman's issue."), fact: t("myths.2.fact", "About a third of cases are male factor. Test both partners.") },
    { myth: t("myths.3.myth", "If you already have a child, you can't have fertility issues."), fact: t("myths.3.fact", "Secondary infertility is real and just as worth investigating.") },
    { myth: t("myths.4.myth", "IVF always works."), fact: t("myths.4.fact", "Success varies by age, cause, and clinic. Going in informed protects your heart.") },
    { myth: t("myths.5.myth", "Just relax and it'll happen."), fact: t("myths.5.fact", "Well-meaning, but rarely true and often hurtful. Medical support exists for a reason.") },
    { myth: t("myths.6.myth", "Birth control is the cause of infertility."), fact: t("myths.6.fact", "It usually isn't. Underlying conditions may have been masked, not caused, by it.") },
    { myth: t("myths.7.myth", "You ovulate on day 14 of every cycle."), fact: t("myths.7.fact", "Ovulation timing varies between people and cycles, track yours, don't guess.") },
    { myth: t("myths.8.myth", "Trying for 6 months and waiting another 6 is best."), fact: t("myths.8.fact", "Over 35, get assessed after 6 months. Over 40, after 3. Time matters.") },
    { myth: t("myths.9.myth", "Lifestyle changes don't affect male fertility."), fact: t("myths.9.fact", "Sleep, alcohol, smoking, and diet meaningfully affect sperm quality.") }
  ]
};
