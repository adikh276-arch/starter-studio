"use client";
import { t } from "@/features/women/lib/i18n-utils";
import { type TipPage, type TipSlug } from "@/features/women/data/tips";

export const tipPagesData: Record<TipSlug, TipPage> = {
  "hair-skin": {
    slug: "hair-skin",
    title: t("hair-skin.title", "Hair & Skin"),
    subtitle: t("hair-skin.subtitle", "Discover simple tips for healthy hair and glowing skin."),
    iconKey: "Wind",
    tone: "teal",
    items: [
      {
        title: t("hair-skin.items.0.title", "Choose Your Face Wash Smartly"),
        subtitle: t("hair-skin.items.0.subtitle", "Pick the right cleanser for your skin"),
        iconKey: "Droplet",
        detail: t("hair-skin.items.0.detail", "Match your cleanser to your skin type, gentle gels for oily skin, creamy formulas for dry skin.")
      },
      {
        title: t("hair-skin.items.1.title", "Go for Cleansers at Night"),
        subtitle: t("hair-skin.items.1.subtitle", "Remove dirt & makeup before bed"),
        iconKey: "Moon",
        detail: t("hair-skin.items.1.detail", "Cleansing at night clears the day's pollutants so your skin can repair while you sleep.")
      },
      {
        title: t("hair-skin.items.2.title", "Hold Onto Sunscreens"),
        subtitle: t("hair-skin.items.2.subtitle", "Daily sun protection is essential"),
        iconKey: "Sun",
        detail: t("hair-skin.items.2.detail", "SPF 30+ every morning is the single best anti-aging habit you can build.")
      },
      {
        title: t("hair-skin.items.3.title", "Go for Antioxidants"),
        subtitle: t("hair-skin.items.3.subtitle", "Protect skin from damage"),
        iconKey: "Leaf",
        detail: t("hair-skin.items.3.detail", "Vitamin C in the morning helps neutralize free radicals from sun and pollution.")
      },
      {
        title: t("hair-skin.items.4.title", "Night Care Routine"),
        subtitle: t("hair-skin.items.4.subtitle", "Repair skin while you sleep"),
        iconKey: "Moon",
        detail: t("hair-skin.items.4.detail", "A retinoid or peptide cream at night supports collagen and cell turnover.")
      },
      {
        title: t("hair-skin.items.5.title", "Exfoliation Is Important"),
        subtitle: t("hair-skin.items.5.subtitle", "Exfoliate gently, not harshly"),
        iconKey: "Sparkles",
        detail: t("hair-skin.items.5.detail", "Use a chemical exfoliant 1–2x weekly, skip harsh scrubs that cause micro-tears.")
      },
      {
        title: t("hair-skin.items.6.title", "Condition Your Hair"),
        subtitle: t("hair-skin.items.6.subtitle", "Essential after every wash"),
        iconKey: "Wind",
        detail: t("hair-skin.items.6.detail", "Conditioner seals the cuticle, locking in moisture and reducing breakage.")
      },
      {
        title: t("hair-skin.items.7.title", "Trim Your Hair Regularly"),
        subtitle: t("hair-skin.items.7.subtitle", "Prevent split ends"),
        iconKey: "Scissors",
        detail: t("hair-skin.items.7.detail", "A trim every 8–12 weeks keeps ends healthy and growth looking thicker.")
      },
      {
        title: t("hair-skin.items.8.title", "Relax and De-Stress"),
        subtitle: t("hair-skin.items.8.subtitle", "Stress impacts skin & hair"),
        iconKey: "Heart",
        detail: t("hair-skin.items.8.detail", "Cortisol triggers breakouts and shedding. Sleep, breath, and breaks all count.")
      }
    ]
  },
  food: {
    slug: "food",
    title: t("food.title", "Food"),
    subtitle: t("food.subtitle", "Learn smart nutrition tips to support your overall wellness."),
    iconKey: "UtensilsCrossed",
    tone: "orange",
    items: [
      {
        title: t("food.items.0.title", "Eat Iron & Zinc-Rich Foods"),
        subtitle: t("food.items.0.subtitle", "Helps reduce PMS fatigue & weakness"),
        iconKey: "Shield",
        detail: t("food.items.0.detail", "Lentils, spinach, pumpkin seeds, and lean meats restore energy through your cycle.")
      },
      {
        title: t("food.items.1.title", "Boost Calcium Intake"),
        subtitle: t("food.items.1.subtitle", "Supports bones & reduces PMS symptoms"),
        iconKey: "Bone",
        detail: t("food.items.1.detail", "Dairy, fortified plant milks, and leafy greens give your bones long-term protection.")
      },
      {
        title: t("food.items.2.title", "Avoid Sugar & Fried Foods"),
        subtitle: t("food.items.2.subtitle", "Reduces inflammation & mood swings"),
        iconKey: "Ban",
        detail: t("food.items.2.detail", "Processed sugar spikes inflammation, a quiet driver of cramps and low moods.")
      },
      {
        title: t("food.items.3.title", "Cut Down on Salt"),
        subtitle: t("food.items.3.subtitle", "Helps prevent bloating"),
        iconKey: "Salad",
        detail: t("food.items.3.detail", "Lower sodium = less water retention, especially in the days before your period.")
      },
      {
        title: t("food.items.4.title", "Limit Caffeine & Alcohol"),
        subtitle: t("food.items.4.subtitle", "Keeps hormones balanced"),
        iconKey: "Coffee",
        detail: t("food.items.4.detail", "Both can disrupt sleep and worsen PMS. Try swapping one cup for herbal tea.")
      },
      {
        title: t("food.items.5.title", "Add Omega-3 Fatty Acids"),
        subtitle: t("food.items.5.subtitle", "Supports hormones & reduces cramps"),
        iconKey: "Fish",
        detail: t("food.items.5.detail", "Salmon, walnuts, and flaxseed help calm inflammation and steady moods.")
      },
      {
        title: t("food.items.6.title", "Eat Smaller, Frequent Meals"),
        subtitle: t("food.items.6.subtitle", "Reduces nausea & acidity"),
        iconKey: "Clock",
        detail: t("food.items.6.detail", "Eating every 3–4 hours keeps blood sugar, and energy, steady.")
      },
      {
        title: t("food.items.7.title", "Choose High-Quality Protein"),
        subtitle: t("food.items.7.subtitle", "Supports growth & recovery"),
        iconKey: "Drumstick",
        detail: t("food.items.7.detail", "Eggs, fish, beans, and Greek yogurt help muscles, hormones, and satiety.")
      },
      {
        title: t("food.items.8.title", "Increase Healthy Fats"),
        subtitle: t("food.items.8.subtitle", "Supports hormones & glowing skin"),
        iconKey: "Leaf",
        detail: t("food.items.8.detail", "Avocado, olive oil, and nuts are essential, fat is fuel for your hormones.")
      }
    ]
  },
  "weight-loss": {
    slug: "weight-loss",
    title: t("weight-loss.title", "Weight Loss"),
    subtitle: t("weight-loss.subtitle", "Get practical tips for healthy and sustainable weight management."),
    iconKey: "Scale",
    tone: "pink",
    items: [
      {
        title: t("weight-loss.items.0.title", "Cut Down on Refined Carbs"),
        subtitle: t("weight-loss.items.0.subtitle", "Prevents sugar spikes & fat gain"),
        iconKey: "Sandwich",
        detail: t("weight-loss.items.0.detail", "Swap white bread and pastries for whole grains to keep blood sugar steady.")
      },
      {
        title: t("weight-loss.items.1.title", "Eat More Protein"),
        subtitle: t("weight-loss.items.1.subtitle", "Keeps you full & boosts metabolism"),
        iconKey: "Egg",
        detail: t("weight-loss.items.1.detail", "A palm-sized portion at every meal reduces cravings and protects muscle.")
      },
      {
        title: t("weight-loss.items.2.title", "Drink More Water"),
        subtitle: t("weight-loss.items.2.subtitle", "Supports fat burning & reduces hunger"),
        iconKey: "GlassWater",
        detail: t("weight-loss.items.2.detail", "Often, thirst masquerades as hunger, start each meal with a glass of water.")
      },
      {
        title: t("weight-loss.items.3.title", "Add Resistance Training"),
        subtitle: t("weight-loss.items.3.subtitle", "Builds muscle & burns more calories"),
        iconKey: "Dumbbell",
        detail: t("weight-loss.items.3.detail", "Two strength sessions a week change body composition more than endless cardio.")
      },
      {
        title: t("weight-loss.items.4.title", "Do More Cardio"),
        subtitle: t("weight-loss.items.4.subtitle", "Burns calories & improves fitness"),
        iconKey: "Bike",
        detail: t("weight-loss.items.4.detail", "Mix steady walks with short bursts of higher intensity for heart health.")
      },
      {
        title: t("weight-loss.items.5.title", "Fill Up on Fiber"),
        subtitle: t("weight-loss.items.5.subtitle", "Keeps you full for longer"),
        iconKey: "Wheat",
        detail: t("weight-loss.items.5.detail", "Aim for 25–30g daily from veggies, legumes, fruit, and whole grains.")
      },
      {
        title: t("weight-loss.items.6.title", "Limit Processed Foods & Sugar"),
        subtitle: t("weight-loss.items.6.subtitle", "Cuts empty calories"),
        iconKey: "Cookie",
        detail: t("weight-loss.items.6.detail", "Whole foods carry nutrients; processed foods carry mostly extras you don't need.")
      },
      {
        title: t("weight-loss.items.7.title", "Practice Mindful Eating"),
        subtitle: t("weight-loss.items.7.subtitle", "Prevents overeating"),
        iconKey: "UtensilsCrossed",
        detail: t("weight-loss.items.7.detail", "Slow down, no screens, your brain needs ~20 minutes to register fullness.")
      },
      {
        title: t("weight-loss.items.8.title", "Get Enough Sleep"),
        subtitle: t("weight-loss.items.8.subtitle", "Balances hunger hormones"),
        iconKey: "Moon",
        detail: t("weight-loss.items.8.detail", "Less than 7 hours pushes ghrelin up and willpower down. Sleep is a weight tool.")
      }
    ]
  },
  pms: {
    slug: "pms",
    title: t("pms.title", "PMS"),
    subtitle: t("pms.subtitle", "Find effective ways to manage PMS symptoms and feel better each month."),
    iconKey: "Flower",
    tone: "purple",
    items: [
      {
        title: t("pms.items.0.title", "Follow a Balanced, Nutrient-Rich Diet"),
        subtitle: t("pms.items.0.subtitle", "Supports hormones & reduces fatigue"),
        iconKey: "Salad",
        detail: t("pms.items.0.detail", "Whole foods with steady protein and complex carbs ease symptoms across the cycle.")
      },
      {
        title: t("pms.items.1.title", "Exercise Regularly"),
        subtitle: t("pms.items.1.subtitle", "Boost mood & eases cramps"),
        iconKey: "Bike",
        detail: t("pms.items.1.detail", "Even a 20-minute walk releases endorphins that quietly counter PMS lows.")
      },
      {
        title: t("pms.items.2.title", "Manage Stress Effectively"),
        subtitle: t("pms.items.2.subtitle", "Reduces emotional symptoms"),
        iconKey: "Brain",
        detail: t("pms.items.2.detail", "Stress amplifies every PMS symptom. Breathwork and rest are non-negotiable.")
      },
      {
        title: t("pms.items.3.title", "Stay Well Hydrated"),
        subtitle: t("pms.items.3.subtitle", "Reduces bloating & discomfort"),
        iconKey: "GlassWater",
        detail: t("pms.items.3.detail", "Counterintuitive but true, more water means less water retention.")
      },
      {
        title: t("pms.items.4.title", "Get Sufficient Sleep"),
        subtitle: t("pms.items.4.subtitle", "Improves mood & energy"),
        iconKey: "Moon",
        detail: t("pms.items.4.detail", "Aim for 7–9 hours, especially in the luteal phase when sleep often suffers.")
      },
      {
        title: t("pms.items.5.title", "Limit Caffeine & Alcohol"),
        subtitle: t("pms.items.5.subtitle", "Prevents sleep & mood issues"),
        iconKey: "Coffee",
        detail: t("pms.items.5.detail", "Both worsen anxiety, breast tenderness, and disrupted sleep before your period.")
      },
      {
        title: t("pms.items.6.title", "Take Essential Supplements"),
        subtitle: t("pms.items.6.subtitle", "Helps with cramps & fatigue"),
        iconKey: "Pill",
        detail: t("pms.items.6.detail", "Magnesium, B6, and vitamin D have solid evidence, talk to your clinician first.")
      },
      {
        title: t("pms.items.7.title", "Use Heat Therapy for Pain Relief"),
        subtitle: t("pms.items.7.subtitle", "Eases cramps naturally"),
        iconKey: "Flame",
        detail: t("pms.items.7.detail", "A heating pad on the lower belly can match over-the-counter pain relievers for cramps.")
      },
      {
        title: t("pms.items.8.title", "Include Anti-Inflammatory Foods"),
        subtitle: t("pms.items.8.subtitle", "Helps reduce PMS pain"),
        iconKey: "Leaf",
        detail: t("pms.items.8.detail", "Berries, fatty fish, turmeric, and leafy greens calm the inflammation behind cramps.")
      }
    ]
  }
};
