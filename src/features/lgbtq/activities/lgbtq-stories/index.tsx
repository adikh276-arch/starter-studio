import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import StoriesList from './components/StoriesList';
import StoryDetail from './components/StoryDetail';
import { stories } from './data/stories';

export default function LgbtqStories() {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  const selectedStory = selectedStoryId ? stories.find(s => s.id === selectedStoryId) : null;

  return (
    <div className="min-h-screen bg-slate-50">
      {selectedStory ? (
        <StoryDetail story={selectedStory} onBack={() => setSelectedStoryId(null)} />
      ) : (
        <>
          <HeroSection />
          <StoriesList stories={stories} onSelectStory={setSelectedStoryId} />
        </>
      )}
    </div>
  );
}
