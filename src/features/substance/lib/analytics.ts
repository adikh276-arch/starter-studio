// Mock analytics to fix build without mixpanel-browser
export function identifyUser() {}
export function trackEvent() {}
export function trackPageView() {}
export function trackOnboardingStarted() {}
export function trackOnboardingCompleted() {}
export function trackLogSaved() {}
export function trackStreakReset() {}
export function trackCravingLogged() {}
export function trackUrgeSurfed() {}
export function trackToolOpened() {}
export function trackAssessmentCompleted() {}
export function trackNotificationAction() {}
export function trackLanguageChanged() {}
export function trackHighRiskSignal() {}
export function trackResourceViewed() {}
export function trackCommunityUpvote() {}
export function trackCommunityPost() {}
export function trackMilestoneReached() {}

export const analytics = new Proxy({}, {
    get: function() {
        return function() {};
    }
});
