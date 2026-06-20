import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { SignUp } from "@/pages/SignUp";
import { Dashboard } from "@/pages/Dashboard";
import { NoActivePlan } from "@/pages/NoActivePlan";
import { AppBetterPopup } from "@/components/modals/AppBetterPopup";
import { SelfCareResources } from "@/pages/SelfCareResources";
import { WomenWellnessSelfCare } from "@/pages/WomenWellnessSelfCare";
import { PainAreas } from "@/pages/PainAreas";
import { TasksPage } from "@/pages/TasksPage";
import { AppointmentsPage } from "@/pages/AppointmentsPage";
import { InsightsPage } from "@/pages/InsightsPage";
import { BillingPage } from "@/pages/BillingPage";
import { ReferEarnPage } from "@/pages/ReferEarnPage";
import { FeedbackPage } from "@/pages/FeedbackPage";
import { SupportPage } from "@/pages/SupportPage";
import { CareTeam } from "@/pages/CareTeam";
import { CareTeamHistory } from "@/pages/CareTeamHistory";
import { ProfilePage } from "@/pages/ProfilePage";
import { MindfulnessPage } from "@/pages/MindfulnessPage";
import { OCDPage } from "@/pages/OCDPage";
import { Hotline } from "@/pages/Hotline";
import { EmergencyDoctors } from "@/pages/EmergencyDoctors";
import { MindfulnessSelfCare } from "@/pages/MindfulnessSelfCare";
import { OCDSelfCare } from "@/pages/OCDSelfCare";
import { HealthOCDPage } from "@/pages/HealthOCDPage";
import { HoardingOCDPage } from "@/pages/HoardingOCDPage";
import { CompulsiveHoardingArticle } from "@/pages/CompulsiveHoardingArticle";
import { HoardingDisorderArticle } from "@/pages/HoardingDisorderArticle";
import { OCDSymptomArticle } from "@/pages/OCDSymptomArticle";
import { HoardingPhenotypeArticle } from "@/pages/HoardingPhenotypeArticle";
import { HoardingControversiesArticle } from "@/pages/HoardingControversiesArticle";
import { LifeBeyondPilesStory } from "@/pages/LifeBeyondPilesStory";
import { JoanTeacherStory } from "@/pages/JoanTeacherStory";
import { JeanneLeierStory } from "@/pages/JeanneLeierStory";
import { ThatHoarderStory } from "@/pages/ThatHoarderStory";
import { BrainBehindHoardingStory } from "@/pages/BrainBehindHoardingStory";
import { TrichotillomaniaPage } from "@/pages/TrichotillomaniaPage";
import { TrichMyth1 } from "@/pages/TrichMyth1";
import { TrichMyth2 } from "@/pages/TrichMyth2";
import { TrichMyth3 } from "@/pages/TrichMyth3";
import { TrichMyth4 } from "@/pages/TrichMyth4";
import { TrichMyth5 } from "@/pages/TrichMyth5";
import { TrichArticle1 } from "@/pages/TrichArticle1";
import { TrichArticle2 } from "@/pages/TrichArticle2";
import { TrichArticle3 } from "@/pages/TrichArticle3";
import { TrichArticle4 } from "@/pages/TrichArticle4";
import { TrichArticle5 } from "@/pages/TrichArticle5";
import { ContaminationOCDPage } from "@/pages/ContaminationOCDPage";
import { ContaminationTip1 } from "@/pages/ContaminationTip1";
import { ContaminationTip2 } from "@/pages/ContaminationTip2";
import { ContaminationTip3 } from "@/pages/ContaminationTip3";
import { ContaminationTip4 } from "@/pages/ContaminationTip4";
import { ContaminationTip5 } from "@/pages/ContaminationTip5";
import { ContaminationArticle1 } from "@/pages/ContaminationArticle1";
import { ContaminationArticle2 } from "@/pages/ContaminationArticle2";
import { ContaminationArticle3 } from "@/pages/ContaminationArticle3";
import { ContaminationArticle4 } from "@/pages/ContaminationArticle4";
import { ContaminationArticle5 } from "@/pages/ContaminationArticle5";
import { PureOOCDPage } from "@/pages/PureOOCDPage";
import { PureOArticle1 } from "@/pages/PureOArticle1";
import { PureOArticle2 } from "@/pages/PureOArticle2";
import { PureOArticle3 } from "@/pages/PureOArticle3";
import { PureOArticle4 } from "@/pages/PureOArticle4";
import { PureOArticle5 } from "@/pages/PureOArticle5";
import { PureOStory1 } from "@/pages/PureOStory1";
import { PureOStory2 } from "@/pages/PureOStory2";
import { PureOStory3 } from "@/pages/PureOStory3";
import { PureOStory4 } from "@/pages/PureOStory4";
import { PureOStory5 } from "@/pages/PureOStory5";
import { LGBTQSelfCare } from "@/pages/LGBTQSelfCare";
import { LGBTQTips } from "@/pages/LGBTQTips";
import { FindYourCommunity } from "@/pages/FindYourCommunity";
import { SetGentleBoundaries } from "@/pages/SetGentleBoundaries";
import { HonorYourIdentity } from "@/pages/HonorYourIdentity";
import { AffirmingSelfTalk } from "@/pages/AffirmingSelfTalk";
import { CreateSafeSpaces } from "@/pages/CreateSafeSpaces";
import { ProcessGriefLoss } from "@/pages/ProcessGriefLoss";
import { LGBTQMythsFacts } from "@/pages/LGBTQMythsFacts";
import { LGBTQMythDetail } from "@/pages/LGBTQMythDetail";
import { LGBTQArticles } from "@/pages/LGBTQArticles";
import { LGBTQArticleDetail } from "@/pages/LGBTQArticleDetail";
import { LesbianGuide } from "@/pages/LesbianGuide";
import { GayGuide } from "@/pages/GayGuide";
import { BisexualGuide } from "@/pages/BisexualGuide";
import { TransGuide } from "@/pages/TransGuide";
import { DepressionPage } from "@/pages/DepressionPage";
import { ExercisePlans } from "@/pages/ExercisePlans";
import { ExerciseDetails } from "@/pages/ExerciseDetails";
import { ServicePage } from "@/pages/ServicePage";
import { ProviderProfile } from "@/pages/ProviderProfile";
import { Journal } from "@/pages/Journal";
import { JournalNew } from "@/pages/JournalNew";
import { PlansPage } from "@/pages/PlansPage";
import { TherapyPlansPage } from "@/pages/TherapyPlansPage";
import { DiabetesAcademy } from "@/pages/DiabetesAcademy";
import { HypertensionAcademy } from "@/pages/HypertensionAcademy";
import { CoachingAreas } from "@/pages/CoachingAreas";
import { FitnessSelfCare } from "@/pages/FitnessSelfCare";
import { NutritionSelfCare } from "@/pages/NutritionSelfCare";
import { YogaSelfCare } from "@/pages/YogaSelfCare";
import { SubstanceUseSelfCare } from "@/pages/SubstanceUseSelfCare";
import { DeaddictionPage } from "@/pages/DeaddictionPage";
import { FinancialWellnessSelfCare } from "@/pages/FinancialWellnessSelfCare";
import { CategoriesPage } from "@/pages/CategoriesPage";
import { SubcategoryPage } from "@/pages/SubcategoryPage";
import { TimePage } from "@/pages/TimePage";
import { MeditationDetailPage } from "@/pages/MeditationDetailPage";
import { LifeIsKindDetailPage } from "@/pages/LifeIsKindDetailPage";
import { BrowseByGoalDetail } from "@/pages/BrowseByGoalDetail";
import { SeeAllPage } from "@/pages/SeeAllPage";
import { CollectionDetailPage } from "@/pages/CollectionDetailPage";
import { DailyProgramPage } from "@/pages/DailyProgramPage";
import { ChatPage } from "@/pages/ChatPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { HealthChecksPackages } from "@/pages/HealthChecksPackages";
import { DiagnosticTests } from "@/pages/DiagnosticTests";
import { MedicinesPharmacy } from "@/pages/MedicinesPharmacy";
import { PrescriptionRefill } from "@/pages/PrescriptionRefill";
import { MedicalRecords } from "@/pages/MedicalRecords";
import { MyDocuments } from "@/pages/MyDocuments";

function App() {
  const [showAppPopup, setShowAppPopup] = useState(false);

  useEffect(() => {
    // Check if user is logged in and should see the popup
    const userString = localStorage.getItem("mantraUser");
    if (userString) {
      const user = JSON.parse(userString);
      if (user.showAppPopup !== false) {
        setShowAppPopup(true);
      }
    }
  }, []);

  const handleClosePopup = () => {
    setShowAppPopup(false);
  };

  return (
    <BrowserRouter>
      {showAppPopup && <AppBetterPopup onClose={handleClosePopup} />}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/no-plan"
          element={
            <ProtectedRoute>
              <NoActivePlan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/self-care"
          element={
            <ProtectedRoute>
              <SelfCareResources />
            </ProtectedRoute>
          }
        />
        <Route
          path="/women-wellness-self-care"
          element={
            <ProtectedRoute>
              <WomenWellnessSelfCare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pain-areas"
          element={
            <ProtectedRoute>
              <PainAreas />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <TasksPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <AppointmentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/insights"
          element={
            <ProtectedRoute>
              <InsightsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/billing"
          element={
            <ProtectedRoute>
              <BillingPage />
            </ProtectedRoute>
          }
        />
        {/* Legacy redirects */}
        <Route path="/subscription" element={<Navigate to="/billing" replace />} />
        <Route path="/orders"       element={<Navigate to="/billing" replace />} />
        <Route
          path="/refer"
          element={
            <ProtectedRoute>
              <ReferEarnPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feedback"
          element={
            <ProtectedRoute>
              <FeedbackPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/support"
          element={
            <ProtectedRoute>
              <SupportPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/care-team"
          element={
            <ProtectedRoute>
              <CareTeam />
            </ProtectedRoute>
          }
        />
        <Route
          path="/care-team-history"
          element={
            <ProtectedRoute>
              <CareTeamHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/service/meditation"
          element={
            <ProtectedRoute>
              <MindfulnessPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ocd"
          element={
            <ProtectedRoute>
              <OCDPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hotline"
          element={
            <ProtectedRoute>
              <Hotline />
            </ProtectedRoute>
          }
        />
        <Route
          path="/emergency-doctors"
          element={
            <ProtectedRoute>
              <EmergencyDoctors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mindfulness-self-care"
          element={
            <ProtectedRoute>
              <MindfulnessSelfCare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ocd-self-care"
          element={
            <ProtectedRoute>
              <OCDSelfCare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/health-ocd"
          element={
            <ProtectedRoute>
              <HealthOCDPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hoarding-ocd"
          element={
            <ProtectedRoute>
              <HoardingOCDPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compulsive-hoarding-article"
          element={
            <ProtectedRoute>
              <CompulsiveHoardingArticle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hoarding-disorder-article"
          element={
            <ProtectedRoute>
              <HoardingDisorderArticle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ocd-symptom-article"
          element={
            <ProtectedRoute>
              <OCDSymptomArticle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hoarding-phenotype-article"
          element={
            <ProtectedRoute>
              <HoardingPhenotypeArticle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hoarding-controversies-article"
          element={
            <ProtectedRoute>
              <HoardingControversiesArticle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/life-beyond-piles-story"
          element={
            <ProtectedRoute>
              <LifeBeyondPilesStory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/joan-teacher-story"
          element={
            <ProtectedRoute>
              <JoanTeacherStory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jeanne-leier-story"
          element={
            <ProtectedRoute>
              <JeanneLeierStory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/that-hoarder-story"
          element={
            <ProtectedRoute>
              <ThatHoarderStory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brain-behind-hoarding-story"
          element={
            <ProtectedRoute>
              <BrainBehindHoardingStory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trichotillomania"
          element={
            <ProtectedRoute>
              <TrichotillomaniaPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trich-myth-1"
          element={
            <ProtectedRoute>
              <TrichMyth1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trich-myth-2"
          element={
            <ProtectedRoute>
              <TrichMyth2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trich-myth-3"
          element={
            <ProtectedRoute>
              <TrichMyth3 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trich-myth-4"
          element={
            <ProtectedRoute>
              <TrichMyth4 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trich-myth-5"
          element={
            <ProtectedRoute>
              <TrichMyth5 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trich-article-1"
          element={
            <ProtectedRoute>
              <TrichArticle1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trich-article-2"
          element={
            <ProtectedRoute>
              <TrichArticle2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trich-article-3"
          element={
            <ProtectedRoute>
              <TrichArticle3 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trich-article-4"
          element={
            <ProtectedRoute>
              <TrichArticle4 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trich-article-5"
          element={
            <ProtectedRoute>
              <TrichArticle5 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-ocd"
          element={
            <ProtectedRoute>
              <ContaminationOCDPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-tip-1"
          element={
            <ProtectedRoute>
              <ContaminationTip1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-tip-2"
          element={
            <ProtectedRoute>
              <ContaminationTip2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-tip-3"
          element={
            <ProtectedRoute>
              <ContaminationTip3 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-tip-4"
          element={
            <ProtectedRoute>
              <ContaminationTip4 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-tip-5"
          element={
            <ProtectedRoute>
              <ContaminationTip5 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-article-1"
          element={
            <ProtectedRoute>
              <ContaminationArticle1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-article-2"
          element={
            <ProtectedRoute>
              <ContaminationArticle2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-article-3"
          element={
            <ProtectedRoute>
              <ContaminationArticle3 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-article-4"
          element={
            <ProtectedRoute>
              <ContaminationArticle4 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contamination-article-5"
          element={
            <ProtectedRoute>
              <ContaminationArticle5 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-ocd"
          element={
            <ProtectedRoute>
              <PureOOCDPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-article-1"
          element={
            <ProtectedRoute>
              <PureOArticle1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-article-2"
          element={
            <ProtectedRoute>
              <PureOArticle2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-article-3"
          element={
            <ProtectedRoute>
              <PureOArticle3 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-article-4"
          element={
            <ProtectedRoute>
              <PureOArticle4 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-article-5"
          element={
            <ProtectedRoute>
              <PureOArticle5 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-story-1"
          element={
            <ProtectedRoute>
              <PureOStory1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-story-2"
          element={
            <ProtectedRoute>
              <PureOStory2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-story-3"
          element={
            <ProtectedRoute>
              <PureOStory3 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-story-4"
          element={
            <ProtectedRoute>
              <PureOStory4 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pure-o-story-5"
          element={
            <ProtectedRoute>
              <PureOStory5 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lgbtq-self-care"
          element={
            <ProtectedRoute>
              <LGBTQSelfCare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lgbtq-tips"
          element={
            <ProtectedRoute>
              <LGBTQTips />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lgbtq-myths-facts"
          element={
            <ProtectedRoute>
              <LGBTQMythsFacts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lgbtq-myth/:mythId"
          element={
            <ProtectedRoute>
              <LGBTQMythDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lgbtq-articles"
          element={
            <ProtectedRoute>
              <LGBTQArticles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lgbtq-article/:articleId"
          element={
            <ProtectedRoute>
              <LGBTQArticleDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lesbian-guide"
          element={
            <ProtectedRoute>
              <LesbianGuide />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gay-guide"
          element={
            <ProtectedRoute>
              <GayGuide />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bisexual-guide"
          element={
            <ProtectedRoute>
              <BisexualGuide />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trans-guide"
          element={
            <ProtectedRoute>
              <TransGuide />
            </ProtectedRoute>
          }
        />
        <Route
          path="/find-your-community"
          element={
            <ProtectedRoute>
              <FindYourCommunity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/set-gentle-boundaries"
          element={
            <ProtectedRoute>
              <SetGentleBoundaries />
            </ProtectedRoute>
          }
        />
        <Route
          path="/honor-your-identity"
          element={
            <ProtectedRoute>
              <HonorYourIdentity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/affirming-self-talk"
          element={
            <ProtectedRoute>
              <AffirmingSelfTalk />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-safe-spaces"
          element={
            <ProtectedRoute>
              <CreateSafeSpaces />
            </ProtectedRoute>
          }
        />
        <Route
          path="/process-grief-loss"
          element={
            <ProtectedRoute>
              <ProcessGriefLoss />
            </ProtectedRoute>
          }
        />
        <Route
          path="/depression"
          element={
            <ProtectedRoute>
              <DepressionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exercise-plans"
          element={
            <ProtectedRoute>
              <ExercisePlans />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exercise-details/:exerciseId"
          element={
            <ProtectedRoute>
              <ExerciseDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/service/:serviceId"
          element={
            <ProtectedRoute>
              <ServicePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/provider-profile/:providerId"
          element={
            <ProtectedRoute>
              <ProviderProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/journal"
          element={
            <ProtectedRoute>
              <Journal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/journal-new"
          element={
            <ProtectedRoute>
              <JournalNew />
            </ProtectedRoute>
          }
        />
        <Route
          path="/journal/:id"
          element={
            <ProtectedRoute>
              <JournalNew />
            </ProtectedRoute>
          }
        />
        <Route
          path="/plans"
          element={
            <ProtectedRoute>
              <PlansPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/therapy-plans"
          element={
            <ProtectedRoute>
              <TherapyPlansPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diabetes-academy"
          element={
            <ProtectedRoute>
              <DiabetesAcademy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hypertension-academy"
          element={
            <ProtectedRoute>
              <HypertensionAcademy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coaching-areas"
          element={
            <ProtectedRoute>
              <CoachingAreas />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fitness-self-care"
          element={
            <ProtectedRoute>
              <FitnessSelfCare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/nutrition-self-care"
          element={
            <ProtectedRoute>
              <NutritionSelfCare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/yoga-self-care"
          element={
            <ProtectedRoute>
              <YogaSelfCare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/substance-use-self-care"
          element={
            <ProtectedRoute>
              <SubstanceUseSelfCare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deaddiction"
          element={
            <ProtectedRoute>
              <DeaddictionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/financial-wellness-self-care"
          element={
            <ProtectedRoute>
              <FinancialWellnessSelfCare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <CategoriesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/subcategory/:subcategoryId"
          element={
            <ProtectedRoute>
              <SubcategoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/time/:timeId"
          element={
            <ProtectedRoute>
              <TimePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/meditation-detail/:meditationId"
          element={
            <ProtectedRoute>
              <MeditationDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/life-is-kind-detail"
          element={
            <ProtectedRoute>
              <LifeIsKindDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/browse-by-goal-detail/:goalId"
          element={
            <ProtectedRoute>
              <BrowseByGoalDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/see-all/:section"
          element={
            <ProtectedRoute>
              <SeeAllPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/collection-detail/:collectionId"
          element={
            <ProtectedRoute>
              <CollectionDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/daily-program/:programId"
          element={
            <ProtectedRoute>
              <DailyProgramPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat/:providerId"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/health-checks-packages"
          element={
            <ProtectedRoute>
              <HealthChecksPackages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diagnostic-tests"
          element={
            <ProtectedRoute>
              <DiagnosticTests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/medicines-pharmacy"
          element={
            <ProtectedRoute>
              <MedicinesPharmacy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/prescription-refill"
          element={
            <ProtectedRoute>
              <PrescriptionRefill />
            </ProtectedRoute>
          }
        />
        <Route
          path="/medical-records"
          element={
            <ProtectedRoute>
              <MedicalRecords />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-documents"
          element={
            <ProtectedRoute>
              <MyDocuments />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const userString = localStorage.getItem("mantraUser");
  
  if (!userString) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default App;