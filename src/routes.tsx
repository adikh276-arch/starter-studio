import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const AffirmingSelfTalk = lazy(() => import("@/pages/AffirmingSelfTalk").then(m => ({ default: m.AffirmingSelfTalk })));
const AppointmentsPage = lazy(() => import("@/pages/AppointmentsPage").then(m => ({ default: m.AppointmentsPage })));
const BillingPage = lazy(() => import("@/pages/BillingPage").then(m => ({ default: m.BillingPage })));
const BisexualGuide = lazy(() => import("@/pages/BisexualGuide").then(m => ({ default: m.BisexualGuide })));
const BrainBehindHoardingStory = lazy(() => import("@/pages/BrainBehindHoardingStory").then(m => ({ default: m.BrainBehindHoardingStory })));
const BrowseByGoalDetail = lazy(() => import("@/pages/BrowseByGoalDetail").then(m => ({ default: m.BrowseByGoalDetail })));
const CareTeam = lazy(() => import("@/pages/CareTeam").then(m => ({ default: m.CareTeam })));
const CareTeamHistory = lazy(() => import("@/pages/CareTeamHistory").then(m => ({ default: m.CareTeamHistory })));
const CategoriesPage = lazy(() => import("@/pages/CategoriesPage").then(m => ({ default: m.CategoriesPage })));
const ChatPage = lazy(() => import("@/pages/ChatPage").then(m => ({ default: m.ChatPage })));
const CheckoutPage = lazy(() => import("@/pages/CheckoutPage").then(m => ({ default: m.CheckoutPage })));
const CoachingAreas = lazy(() => import("@/pages/CoachingAreas").then(m => ({ default: m.CoachingAreas })));
const CollectionDetailPage = lazy(() => import("@/pages/CollectionDetailPage").then(m => ({ default: m.CollectionDetailPage })));
const CompulsiveHoardingArticle = lazy(() => import("@/pages/CompulsiveHoardingArticle").then(m => ({ default: m.CompulsiveHoardingArticle })));
const ContaminationArticle1 = lazy(() => import("@/pages/ContaminationArticle1").then(m => ({ default: m.ContaminationArticle1 })));
const ContaminationArticle2 = lazy(() => import("@/pages/ContaminationArticle2").then(m => ({ default: m.ContaminationArticle2 })));
const ContaminationArticle3 = lazy(() => import("@/pages/ContaminationArticle3").then(m => ({ default: m.ContaminationArticle3 })));
const ContaminationArticle4 = lazy(() => import("@/pages/ContaminationArticle4").then(m => ({ default: m.ContaminationArticle4 })));
const ContaminationArticle5 = lazy(() => import("@/pages/ContaminationArticle5").then(m => ({ default: m.ContaminationArticle5 })));
const ContaminationOCDPage = lazy(() => import("@/pages/ContaminationOCDPage").then(m => ({ default: m.ContaminationOCDPage })));
const ContaminationTip1 = lazy(() => import("@/pages/ContaminationTip1").then(m => ({ default: m.ContaminationTip1 })));
const ContaminationTip2 = lazy(() => import("@/pages/ContaminationTip2").then(m => ({ default: m.ContaminationTip2 })));
const ContaminationTip3 = lazy(() => import("@/pages/ContaminationTip3").then(m => ({ default: m.ContaminationTip3 })));
const ContaminationTip4 = lazy(() => import("@/pages/ContaminationTip4").then(m => ({ default: m.ContaminationTip4 })));
const ContaminationTip5 = lazy(() => import("@/pages/ContaminationTip5").then(m => ({ default: m.ContaminationTip5 })));
const CreateSafeSpaces = lazy(() => import("@/pages/CreateSafeSpaces").then(m => ({ default: m.CreateSafeSpaces })));
const DailyProgramPage = lazy(() => import("@/pages/DailyProgramPage").then(m => ({ default: m.DailyProgramPage })));
const Dashboard = lazy(() => import("@/pages/Dashboard").then(m => ({ default: m.Dashboard })));
const DeaddictionPage = lazy(() => import("@/pages/DeaddictionPage").then(m => ({ default: m.DeaddictionPage })));
const DepressionPage = lazy(() => import("@/pages/DepressionPage").then(m => ({ default: m.DepressionPage })));
const DiabetesAcademy = lazy(() => import("@/pages/DiabetesAcademy").then(m => ({ default: m.DiabetesAcademy })));
const DiagnosticTests = lazy(() => import("@/pages/DiagnosticTests").then(m => ({ default: m.DiagnosticTests })));
const EmergencyDoctors = lazy(() => import("@/pages/EmergencyDoctors").then(m => ({ default: m.EmergencyDoctors })));
const ExerciseDetails = lazy(() => import("@/pages/ExerciseDetails").then(m => ({ default: m.ExerciseDetails })));
const ExercisePlans = lazy(() => import("@/pages/ExercisePlans").then(m => ({ default: m.ExercisePlans })));
const FeedbackPage = lazy(() => import("@/pages/FeedbackPage").then(m => ({ default: m.FeedbackPage })));
const FinancialWellnessSelfCare = lazy(() => import("@/pages/FinancialWellnessSelfCare").then(m => ({ default: m.FinancialWellnessSelfCare })));
const FindYourCommunity = lazy(() => import("@/pages/FindYourCommunity").then(m => ({ default: m.FindYourCommunity })));
const FitnessSelfCare = lazy(() => import("@/pages/FitnessSelfCare").then(m => ({ default: m.FitnessSelfCare })));
const GayGuide = lazy(() => import("@/pages/GayGuide").then(m => ({ default: m.GayGuide })));
const HealthChecksPackages = lazy(() => import("@/pages/HealthChecksPackages").then(m => ({ default: m.HealthChecksPackages })));
const HealthOCDPage = lazy(() => import("@/pages/HealthOCDPage").then(m => ({ default: m.HealthOCDPage })));
const HoardingControversiesArticle = lazy(() => import("@/pages/HoardingControversiesArticle").then(m => ({ default: m.HoardingControversiesArticle })));
const HoardingDisorderArticle = lazy(() => import("@/pages/HoardingDisorderArticle").then(m => ({ default: m.HoardingDisorderArticle })));
const HoardingOCDPage = lazy(() => import("@/pages/HoardingOCDPage").then(m => ({ default: m.HoardingOCDPage })));
const HoardingPhenotypeArticle = lazy(() => import("@/pages/HoardingPhenotypeArticle").then(m => ({ default: m.HoardingPhenotypeArticle })));
const HonorYourIdentity = lazy(() => import("@/pages/HonorYourIdentity").then(m => ({ default: m.HonorYourIdentity })));
const Hotline = lazy(() => import("@/pages/Hotline").then(m => ({ default: m.Hotline })));
const HypertensionAcademy = lazy(() => import("@/pages/HypertensionAcademy").then(m => ({ default: m.HypertensionAcademy })));
const InsightsPage = lazy(() => import("@/pages/InsightsPage").then(m => ({ default: m.InsightsPage })));
const JeanneLeierStory = lazy(() => import("@/pages/JeanneLeierStory").then(m => ({ default: m.JeanneLeierStory })));
const JoanTeacherStory = lazy(() => import("@/pages/JoanTeacherStory").then(m => ({ default: m.JoanTeacherStory })));
const Journal = lazy(() => import("@/pages/Journal").then(m => ({ default: m.Journal })));
const JournalNew = lazy(() => import("@/pages/JournalNew").then(m => ({ default: m.JournalNew })));
const LGBTQArticleDetail = lazy(() => import("@/pages/LGBTQArticleDetail").then(m => ({ default: m.LGBTQArticleDetail })));
const LGBTQArticles = lazy(() => import("@/pages/LGBTQArticles").then(m => ({ default: m.LGBTQArticles })));
const LGBTQMythDetail = lazy(() => import("@/pages/LGBTQMythDetail").then(m => ({ default: m.LGBTQMythDetail })));
const LGBTQMythsFacts = lazy(() => import("@/pages/LGBTQMythsFacts").then(m => ({ default: m.LGBTQMythsFacts })));
const LGBTQSelfCare = lazy(() => import("@/pages/LGBTQSelfCare").then(m => ({ default: m.LGBTQSelfCare })));
const LGBTQTips = lazy(() => import("@/pages/LGBTQTips").then(m => ({ default: m.LGBTQTips })));
const LesbianGuide = lazy(() => import("@/pages/LesbianGuide").then(m => ({ default: m.LesbianGuide })));
const LifeBeyondPilesStory = lazy(() => import("@/pages/LifeBeyondPilesStory").then(m => ({ default: m.LifeBeyondPilesStory })));
const LifeIsKindDetailPage = lazy(() => import("@/pages/LifeIsKindDetailPage").then(m => ({ default: m.LifeIsKindDetailPage })));
const MedicalRecords = lazy(() => import("@/pages/MedicalRecords").then(m => ({ default: m.MedicalRecords })));
const MedicinesPharmacy = lazy(() => import("@/pages/MedicinesPharmacy").then(m => ({ default: m.MedicinesPharmacy })));
const MeditationDetailPage = lazy(() => import("@/pages/MeditationDetailPage").then(m => ({ default: m.MeditationDetailPage })));
const MindfulnessPage = lazy(() => import("@/pages/MindfulnessPage").then(m => ({ default: m.MindfulnessPage })));
const MindfulnessSelfCare = lazy(() => import("@/pages/MindfulnessSelfCare").then(m => ({ default: m.MindfulnessSelfCare })));
const MyDocuments = lazy(() => import("@/pages/MyDocuments").then(m => ({ default: m.MyDocuments })));
const NoActivePlan = lazy(() => import("@/pages/NoActivePlan").then(m => ({ default: m.NoActivePlan })));
const NutritionSelfCare = lazy(() => import("@/pages/NutritionSelfCare").then(m => ({ default: m.NutritionSelfCare })));
const OCDPage = lazy(() => import("@/pages/OCDPage").then(m => ({ default: m.OCDPage })));
const OCDSelfCare = lazy(() => import("@/pages/OCDSelfCare").then(m => ({ default: m.OCDSelfCare })));
const OCDSymptomArticle = lazy(() => import("@/pages/OCDSymptomArticle").then(m => ({ default: m.OCDSymptomArticle })));
const PainAreas = lazy(() => import("@/pages/PainAreas").then(m => ({ default: m.PainAreas })));
const PlansPage = lazy(() => import("@/pages/PlansPage").then(m => ({ default: m.PlansPage })));
const PrescriptionRefill = lazy(() => import("@/pages/PrescriptionRefill").then(m => ({ default: m.PrescriptionRefill })));
const ProcessGriefLoss = lazy(() => import("@/pages/ProcessGriefLoss").then(m => ({ default: m.ProcessGriefLoss })));
const ProfilePage = lazy(() => import("@/pages/ProfilePage").then(m => ({ default: m.ProfilePage })));
const ProviderProfile = lazy(() => import("@/pages/ProviderProfile").then(m => ({ default: m.ProviderProfile })));
const PureOArticle1 = lazy(() => import("@/pages/PureOArticle1").then(m => ({ default: m.PureOArticle1 })));
const PureOArticle2 = lazy(() => import("@/pages/PureOArticle2").then(m => ({ default: m.PureOArticle2 })));
const PureOArticle3 = lazy(() => import("@/pages/PureOArticle3").then(m => ({ default: m.PureOArticle3 })));
const PureOArticle4 = lazy(() => import("@/pages/PureOArticle4").then(m => ({ default: m.PureOArticle4 })));
const PureOArticle5 = lazy(() => import("@/pages/PureOArticle5").then(m => ({ default: m.PureOArticle5 })));
const PureOOCDPage = lazy(() => import("@/pages/PureOOCDPage").then(m => ({ default: m.PureOOCDPage })));
const PureOStory1 = lazy(() => import("@/pages/PureOStory1").then(m => ({ default: m.PureOStory1 })));
const PureOStory2 = lazy(() => import("@/pages/PureOStory2").then(m => ({ default: m.PureOStory2 })));
const PureOStory3 = lazy(() => import("@/pages/PureOStory3").then(m => ({ default: m.PureOStory3 })));
const PureOStory4 = lazy(() => import("@/pages/PureOStory4").then(m => ({ default: m.PureOStory4 })));
const PureOStory5 = lazy(() => import("@/pages/PureOStory5").then(m => ({ default: m.PureOStory5 })));
const ReferEarnPage = lazy(() => import("@/pages/ReferEarnPage").then(m => ({ default: m.ReferEarnPage })));
const SeeAllPage = lazy(() => import("@/pages/SeeAllPage").then(m => ({ default: m.SeeAllPage })));
const SelfCareResources = lazy(() => import("@/pages/SelfCareResources").then(m => ({ default: m.SelfCareResources })));
const ServicePage = lazy(() => import("@/pages/ServicePage").then(m => ({ default: m.ServicePage })));
const SetGentleBoundaries = lazy(() => import("@/pages/SetGentleBoundaries").then(m => ({ default: m.SetGentleBoundaries })));
const SignUp = lazy(() => import("@/pages/SignUp").then(m => ({ default: m.SignUp })));
const SubcategoryPage = lazy(() => import("@/pages/SubcategoryPage").then(m => ({ default: m.SubcategoryPage })));
const SubstanceUseSelfCare = lazy(() => import("@/pages/SubstanceUseSelfCare").then(m => ({ default: m.SubstanceUseSelfCare })));
const SupportPage = lazy(() => import("@/pages/SupportPage").then(m => ({ default: m.SupportPage })));
const TasksPage = lazy(() => import("@/pages/TasksPage").then(m => ({ default: m.TasksPage })));
const ThatHoarderStory = lazy(() => import("@/pages/ThatHoarderStory").then(m => ({ default: m.ThatHoarderStory })));
const TherapyPlansPage = lazy(() => import("@/pages/TherapyPlansPage").then(m => ({ default: m.TherapyPlansPage })));
const TimePage = lazy(() => import("@/pages/TimePage").then(m => ({ default: m.TimePage })));
const TransGuide = lazy(() => import("@/pages/TransGuide").then(m => ({ default: m.TransGuide })));
const TrichArticle1 = lazy(() => import("@/pages/TrichArticle1").then(m => ({ default: m.TrichArticle1 })));
const TrichArticle2 = lazy(() => import("@/pages/TrichArticle2").then(m => ({ default: m.TrichArticle2 })));
const TrichArticle3 = lazy(() => import("@/pages/TrichArticle3").then(m => ({ default: m.TrichArticle3 })));
const TrichArticle4 = lazy(() => import("@/pages/TrichArticle4").then(m => ({ default: m.TrichArticle4 })));
const TrichArticle5 = lazy(() => import("@/pages/TrichArticle5").then(m => ({ default: m.TrichArticle5 })));
const TrichMyth1 = lazy(() => import("@/pages/TrichMyth1").then(m => ({ default: m.TrichMyth1 })));
const TrichMyth2 = lazy(() => import("@/pages/TrichMyth2").then(m => ({ default: m.TrichMyth2 })));
const TrichMyth3 = lazy(() => import("@/pages/TrichMyth3").then(m => ({ default: m.TrichMyth3 })));
const TrichMyth4 = lazy(() => import("@/pages/TrichMyth4").then(m => ({ default: m.TrichMyth4 })));
const TrichMyth5 = lazy(() => import("@/pages/TrichMyth5").then(m => ({ default: m.TrichMyth5 })));
const TrichotillomaniaPage = lazy(() => import("@/pages/TrichotillomaniaPage").then(m => ({ default: m.TrichotillomaniaPage })));
const WomenWellnessSelfCare = lazy(() => import("@/pages/WomenWellnessSelfCare").then(m => ({ default: m.WomenWellnessSelfCare })));
const YogaSelfCare = lazy(() => import("@/pages/YogaSelfCare").then(m => ({ default: m.YogaSelfCare })));

export const routes = [
{ path: "/", element: <SignUp /> },
  { path: "/dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
  { path: "/no-plan", element: <ProtectedRoute><NoActivePlan /></ProtectedRoute> },
  { path: "/self-care", element: <ProtectedRoute><SelfCareResources /></ProtectedRoute> },
  { path: "/women-wellness-self-care", element: <ProtectedRoute><WomenWellnessSelfCare /></ProtectedRoute> },
  { path: "/pain-areas", element: <ProtectedRoute><PainAreas /></ProtectedRoute> },
  { path: "/tasks", element: <ProtectedRoute><TasksPage /></ProtectedRoute> },
  { path: "/appointments", element: <ProtectedRoute><AppointmentsPage /></ProtectedRoute> },
  { path: "/insights", element: <ProtectedRoute><InsightsPage /></ProtectedRoute> },
  { path: "/billing", element: <ProtectedRoute><BillingPage /></ProtectedRoute> },
  { path: "/subscription", element: <Navigate to="/billing" replace /> },
  { path: "/orders", element: <Navigate to="/billing" replace /> },
  { path: "/refer", element: <ProtectedRoute><ReferEarnPage /></ProtectedRoute> },
  { path: "/feedback", element: <ProtectedRoute><FeedbackPage /></ProtectedRoute> },
  { path: "/support", element: <ProtectedRoute><SupportPage /></ProtectedRoute> },
  { path: "/care-team", element: <ProtectedRoute><CareTeam /></ProtectedRoute> },
  { path: "/care-team-history", element: <ProtectedRoute><CareTeamHistory /></ProtectedRoute> },
  { path: "/profile", element: <ProtectedRoute><ProfilePage /></ProtectedRoute> },
  { path: "/service/meditation", element: <ProtectedRoute><MindfulnessPage /></ProtectedRoute> },
  { path: "/ocd", element: <ProtectedRoute><OCDPage /></ProtectedRoute> },
  { path: "/hotline", element: <ProtectedRoute><Hotline /></ProtectedRoute> },
  { path: "/emergency-doctors", element: <ProtectedRoute><EmergencyDoctors /></ProtectedRoute> },
  { path: "/mindfulness-self-care", element: <ProtectedRoute><MindfulnessSelfCare /></ProtectedRoute> },
  { path: "/ocd-self-care", element: <ProtectedRoute><OCDSelfCare /></ProtectedRoute> },
  { path: "/health-ocd", element: <ProtectedRoute><HealthOCDPage /></ProtectedRoute> },
  { path: "/hoarding-ocd", element: <ProtectedRoute><HoardingOCDPage /></ProtectedRoute> },
  { path: "/compulsive-hoarding-article", element: <ProtectedRoute><CompulsiveHoardingArticle /></ProtectedRoute> },
  { path: "/hoarding-disorder-article", element: <ProtectedRoute><HoardingDisorderArticle /></ProtectedRoute> },
  { path: "/ocd-symptom-article", element: <ProtectedRoute><OCDSymptomArticle /></ProtectedRoute> },
  { path: "/hoarding-phenotype-article", element: <ProtectedRoute><HoardingPhenotypeArticle /></ProtectedRoute> },
  { path: "/hoarding-controversies-article", element: <ProtectedRoute><HoardingControversiesArticle /></ProtectedRoute> },
  { path: "/life-beyond-piles-story", element: <ProtectedRoute><LifeBeyondPilesStory /></ProtectedRoute> },
  { path: "/joan-teacher-story", element: <ProtectedRoute><JoanTeacherStory /></ProtectedRoute> },
  { path: "/jeanne-leier-story", element: <ProtectedRoute><JeanneLeierStory /></ProtectedRoute> },
  { path: "/that-hoarder-story", element: <ProtectedRoute><ThatHoarderStory /></ProtectedRoute> },
  { path: "/brain-behind-hoarding-story", element: <ProtectedRoute><BrainBehindHoardingStory /></ProtectedRoute> },
  { path: "/trichotillomania", element: <ProtectedRoute><TrichotillomaniaPage /></ProtectedRoute> },
  { path: "/trich-myth-1", element: <ProtectedRoute><TrichMyth1 /></ProtectedRoute> },
  { path: "/trich-myth-2", element: <ProtectedRoute><TrichMyth2 /></ProtectedRoute> },
  { path: "/trich-myth-3", element: <ProtectedRoute><TrichMyth3 /></ProtectedRoute> },
  { path: "/trich-myth-4", element: <ProtectedRoute><TrichMyth4 /></ProtectedRoute> },
  { path: "/trich-myth-5", element: <ProtectedRoute><TrichMyth5 /></ProtectedRoute> },
  { path: "/trich-article-1", element: <ProtectedRoute><TrichArticle1 /></ProtectedRoute> },
  { path: "/trich-article-2", element: <ProtectedRoute><TrichArticle2 /></ProtectedRoute> },
  { path: "/trich-article-3", element: <ProtectedRoute><TrichArticle3 /></ProtectedRoute> },
  { path: "/trich-article-4", element: <ProtectedRoute><TrichArticle4 /></ProtectedRoute> },
  { path: "/trich-article-5", element: <ProtectedRoute><TrichArticle5 /></ProtectedRoute> },
  { path: "/contamination-ocd", element: <ProtectedRoute><ContaminationOCDPage /></ProtectedRoute> },
  { path: "/contamination-tip-1", element: <ProtectedRoute><ContaminationTip1 /></ProtectedRoute> },
  { path: "/contamination-tip-2", element: <ProtectedRoute><ContaminationTip2 /></ProtectedRoute> },
  { path: "/contamination-tip-3", element: <ProtectedRoute><ContaminationTip3 /></ProtectedRoute> },
  { path: "/contamination-tip-4", element: <ProtectedRoute><ContaminationTip4 /></ProtectedRoute> },
  { path: "/contamination-tip-5", element: <ProtectedRoute><ContaminationTip5 /></ProtectedRoute> },
  { path: "/contamination-article-1", element: <ProtectedRoute><ContaminationArticle1 /></ProtectedRoute> },
  { path: "/contamination-article-2", element: <ProtectedRoute><ContaminationArticle2 /></ProtectedRoute> },
  { path: "/contamination-article-3", element: <ProtectedRoute><ContaminationArticle3 /></ProtectedRoute> },
  { path: "/contamination-article-4", element: <ProtectedRoute><ContaminationArticle4 /></ProtectedRoute> },
  { path: "/contamination-article-5", element: <ProtectedRoute><ContaminationArticle5 /></ProtectedRoute> },
  { path: "/pure-o-ocd", element: <ProtectedRoute><PureOOCDPage /></ProtectedRoute> },
  { path: "/pure-o-article-1", element: <ProtectedRoute><PureOArticle1 /></ProtectedRoute> },
  { path: "/pure-o-article-2", element: <ProtectedRoute><PureOArticle2 /></ProtectedRoute> },
  { path: "/pure-o-article-3", element: <ProtectedRoute><PureOArticle3 /></ProtectedRoute> },
  { path: "/pure-o-article-4", element: <ProtectedRoute><PureOArticle4 /></ProtectedRoute> },
  { path: "/pure-o-article-5", element: <ProtectedRoute><PureOArticle5 /></ProtectedRoute> },
  { path: "/pure-o-story-1", element: <ProtectedRoute><PureOStory1 /></ProtectedRoute> },
  { path: "/pure-o-story-2", element: <ProtectedRoute><PureOStory2 /></ProtectedRoute> },
  { path: "/pure-o-story-3", element: <ProtectedRoute><PureOStory3 /></ProtectedRoute> },
  { path: "/pure-o-story-4", element: <ProtectedRoute><PureOStory4 /></ProtectedRoute> },
  { path: "/pure-o-story-5", element: <ProtectedRoute><PureOStory5 /></ProtectedRoute> },
  { path: "/lgbtq-self-care", element: <ProtectedRoute><LGBTQSelfCare /></ProtectedRoute> },
  { path: "/lgbtq-tips", element: <ProtectedRoute><LGBTQTips /></ProtectedRoute> },
  { path: "/lgbtq-myths-facts", element: <ProtectedRoute><LGBTQMythsFacts /></ProtectedRoute> },
  { path: "/lgbtq-myth/:mythId", element: <ProtectedRoute><LGBTQMythDetail /></ProtectedRoute> },
  { path: "/lgbtq-articles", element: <ProtectedRoute><LGBTQArticles /></ProtectedRoute> },
  { path: "/lgbtq-article/:articleId", element: <ProtectedRoute><LGBTQArticleDetail /></ProtectedRoute> },
  { path: "/lesbian-guide", element: <ProtectedRoute><LesbianGuide /></ProtectedRoute> },
  { path: "/gay-guide", element: <ProtectedRoute><GayGuide /></ProtectedRoute> },
  { path: "/bisexual-guide", element: <ProtectedRoute><BisexualGuide /></ProtectedRoute> },
  { path: "/trans-guide", element: <ProtectedRoute><TransGuide /></ProtectedRoute> },
  { path: "/find-your-community", element: <ProtectedRoute><FindYourCommunity /></ProtectedRoute> },
  { path: "/set-gentle-boundaries", element: <ProtectedRoute><SetGentleBoundaries /></ProtectedRoute> },
  { path: "/honor-your-identity", element: <ProtectedRoute><HonorYourIdentity /></ProtectedRoute> },
  { path: "/affirming-self-talk", element: <ProtectedRoute><AffirmingSelfTalk /></ProtectedRoute> },
  { path: "/create-safe-spaces", element: <ProtectedRoute><CreateSafeSpaces /></ProtectedRoute> },
  { path: "/process-grief-loss", element: <ProtectedRoute><ProcessGriefLoss /></ProtectedRoute> },
  { path: "/depression", element: <ProtectedRoute><DepressionPage /></ProtectedRoute> },
  { path: "/exercise-plans", element: <ProtectedRoute><ExercisePlans /></ProtectedRoute> },
  { path: "/exercise-details/:exerciseId", element: <ProtectedRoute><ExerciseDetails /></ProtectedRoute> },
  { path: "/service/:serviceId", element: <ProtectedRoute><ServicePage /></ProtectedRoute> },
  { path: "/provider-profile/:providerId", element: <ProtectedRoute><ProviderProfile /></ProtectedRoute> },
  { path: "/journal", element: <ProtectedRoute><Journal /></ProtectedRoute> },
  { path: "/journal-new", element: <ProtectedRoute><JournalNew /></ProtectedRoute> },
  { path: "/journal/:id", element: <ProtectedRoute><JournalNew /></ProtectedRoute> },
  { path: "/plans", element: <ProtectedRoute><PlansPage /></ProtectedRoute> },
  { path: "/therapy-plans", element: <ProtectedRoute><TherapyPlansPage /></ProtectedRoute> },
  { path: "/diabetes-academy", element: <ProtectedRoute><DiabetesAcademy /></ProtectedRoute> },
  { path: "/hypertension-academy", element: <ProtectedRoute><HypertensionAcademy /></ProtectedRoute> },
  { path: "/coaching-areas", element: <ProtectedRoute><CoachingAreas /></ProtectedRoute> },
  { path: "/fitness-self-care", element: <ProtectedRoute><FitnessSelfCare /></ProtectedRoute> },
  { path: "/nutrition-self-care", element: <ProtectedRoute><NutritionSelfCare /></ProtectedRoute> },
  { path: "/yoga-self-care", element: <ProtectedRoute><YogaSelfCare /></ProtectedRoute> },
  { path: "/substance-use-self-care", element: <ProtectedRoute><SubstanceUseSelfCare /></ProtectedRoute> },
  { path: "/deaddiction", element: <ProtectedRoute><DeaddictionPage /></ProtectedRoute> },
  { path: "/financial-wellness-self-care", element: <ProtectedRoute><FinancialWellnessSelfCare /></ProtectedRoute> },
  { path: "/categories", element: <ProtectedRoute><CategoriesPage /></ProtectedRoute> },
  { path: "/subcategory/:subcategoryId", element: <ProtectedRoute><SubcategoryPage /></ProtectedRoute> },
  { path: "/time/:timeId", element: <ProtectedRoute><TimePage /></ProtectedRoute> },
  { path: "/meditation-detail/:meditationId", element: <ProtectedRoute><MeditationDetailPage /></ProtectedRoute> },
  { path: "/life-is-kind-detail", element: <ProtectedRoute><LifeIsKindDetailPage /></ProtectedRoute> },
  { path: "/browse-by-goal-detail/:goalId", element: <ProtectedRoute><BrowseByGoalDetail /></ProtectedRoute> },
  { path: "/see-all/:section", element: <ProtectedRoute><SeeAllPage /></ProtectedRoute> },
  { path: "/collection-detail/:collectionId", element: <ProtectedRoute><CollectionDetailPage /></ProtectedRoute> },
  { path: "/daily-program/:programId", element: <ProtectedRoute><DailyProgramPage /></ProtectedRoute> },
  { path: "/chat", element: <ProtectedRoute><ChatPage /></ProtectedRoute> },
  { path: "/chat/:providerId", element: <ProtectedRoute><ChatPage /></ProtectedRoute> },
  { path: "/checkout", element: <ProtectedRoute><CheckoutPage /></ProtectedRoute> },
  { path: "/health-checks-packages", element: <ProtectedRoute><HealthChecksPackages /></ProtectedRoute> },
  { path: "/diagnostic-tests", element: <ProtectedRoute><DiagnosticTests /></ProtectedRoute> },
  { path: "/medicines-pharmacy", element: <ProtectedRoute><MedicinesPharmacy /></ProtectedRoute> },
  { path: "/prescription-refill", element: <ProtectedRoute><PrescriptionRefill /></ProtectedRoute> },
  { path: "/medical-records", element: <ProtectedRoute><MedicalRecords /></ProtectedRoute> },
  { path: "/my-documents", element: <ProtectedRoute><MyDocuments /></ProtectedRoute> },
  { path: "*", element: <Navigate to="/" replace /> },
];
