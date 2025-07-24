import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const handlePetitionClick = () => {
    // Replace with your actual Google Form URL
    window.open("https://docs.google.com/forms", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Fix The Path
            <span className="block text-campaign-primary">Now</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our campaign to improve the pedestrian path from Third Street across the railroad tracks in <strong>Lake Oswego, Oregon</strong>
          </p>

          <div className="mb-12">
            <Button 
              onClick={handlePetitionClick}
              variant="campaign-urgent"
              size="lg"
              className="text-lg px-8 py-6 h-auto rounded-lg transform hover:scale-105 transition-transform"
            >
              📝 Sign the Petition
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 text-center border-campaign-primary/20 hover:border-campaign-primary/40 transition-colors">
              <div className="text-3xl font-bold text-campaign-primary mb-2">300+</div>
              <div className="text-muted-foreground">Community Members Affected</div>
            </Card>
            <Card className="p-6 text-center border-campaign-secondary/20 hover:border-campaign-secondary/40 transition-colors">
              <div className="text-3xl font-bold text-campaign-secondary mb-2">Daily</div>
              <div className="text-muted-foreground">Safety Concerns</div>
            </Card>
            <Card className="p-6 text-center border-campaign-urgent/20 hover:border-campaign-urgent/40 transition-colors">
              <div className="text-3xl font-bold text-campaign-urgent mb-2">NOW</div>
              <div className="text-muted-foreground">Time for Action</div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              The Problem
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The current pedestrian path from Third Street across the railroad tracks in Lake Oswego is unsafe and inadequate for our community's needs.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-campaign-urgent mr-2">⚠️</span>
                    Poor visibility and lighting conditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-campaign-urgent mr-2">⚠️</span>
                    Uneven surfaces and trip hazards
                  </li>
                  <li className="flex items-start">
                    <span className="text-campaign-urgent mr-2">⚠️</span>
                    Inadequate barriers and safety measures
                  </li>
                  <li className="flex items-start">
                    <span className="text-campaign-urgent mr-2">⚠️</span>
                    Limited accessibility for wheelchairs and mobility devices
                  </li>
                </ul>
              </div>
              
              <Card className="p-6 bg-campaign-urgent/5 border-campaign-urgent/20">
                <h3 className="text-xl font-semibold mb-4 text-campaign-urgent">
                  Safety First
                </h3>
                <p className="text-muted-foreground">
                  Every day, residents, families, and visitors use this crossing. We need immediate improvements to ensure everyone can travel safely through this vital connection point in our community.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Our Solution
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-campaign-secondary/20 hover:border-campaign-secondary/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-campaign-secondary flex items-center">
                  <span className="mr-2">🛤️</span>
                  Improved Infrastructure
                </h3>
                <p className="text-muted-foreground">
                  Install proper lighting, level surfaces, and clear sight lines to make the crossing safe for all users, day and night.
                </p>
              </Card>

              <Card className="p-6 border-campaign-secondary/20 hover:border-campaign-secondary/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-campaign-secondary flex items-center">
                  <span className="mr-2">♿</span>
                  Universal Access
                </h3>
                <p className="text-muted-foreground">
                  Ensure the path meets ADA compliance standards, making it accessible for everyone in our community.
                </p>
              </Card>

              <Card className="p-6 border-campaign-secondary/20 hover:border-campaign-secondary/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-campaign-secondary flex items-center">
                  <span className="mr-2">🚨</span>
                  Enhanced Safety
                </h3>
                <p className="text-muted-foreground">
                  Add proper warning systems, barriers, and safety signage to prevent accidents and injuries.
                </p>
              </Card>

              <Card className="p-6 border-campaign-secondary/20 hover:border-campaign-secondary/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-campaign-secondary flex items-center">
                  <span className="mr-2">🌟</span>
                  Community Pride
                </h3>
                <p className="text-muted-foreground">
                  Create a crossing that reflects Lake Oswego's commitment to quality infrastructure and community safety.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-campaign-primary to-campaign-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Voice Matters
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Together, we can make this vital pathway safe for everyone in Lake Oswego. 
              Sign our petition and help us bring this important safety improvement to our community.
            </p>
            
            <Button 
              onClick={handlePetitionClick}
              variant="outline"
              size="lg"
              className="bg-white text-campaign-primary border-white hover:bg-white/90 text-lg px-8 py-6 h-auto rounded-lg font-semibold transform hover:scale-105 transition-transform"
            >
              📝 Sign the Petition Now
            </Button>
            
            <p className="mt-6 text-sm opacity-80">
              Help us reach 1,000 signatures • Share with your neighbors • Make a difference
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-2">
            <strong>Fix The Path Now</strong> - A Community Safety Initiative
          </p>
          <p className="text-sm text-muted-foreground">
            Lake Oswego, Oregon • Together for Safer Streets
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;