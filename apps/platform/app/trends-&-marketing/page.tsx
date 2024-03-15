import React from "react";
import { Separator } from "@repo/ui/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import { SearchCheck, Plus, MoreHorizontal } from "lucide-react";
import { Overview } from "@repo/ui/components/ui/overviewChart";

function TrendsAndMarketing() {
  return (
    <div className="px-4">
      <div className="grid grid-cols-2 gap-4 py-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Search Query Trends
            </CardTitle>
            <SearchCheck />
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="dailyTrends" className="w-full">
              <TabsList className="grid w-6/12 grid-cols-3">
                <TabsTrigger value="dailyTrends">Daily</TabsTrigger>
                <TabsTrigger value="weeklyTrends">Weekly</TabsTrigger>
                <TabsTrigger value="monthlyTrends">Monthly</TabsTrigger>
              </TabsList>
              <TabsContent value="dailyTrends">
                <div className="font-bold">Daily Trends</div>
                <span> Shows the search trends over a day</span>
              </TabsContent>
              <TabsContent value="weeklyTrends">
                <div className="font-bold">Weekly Trends</div>
                <span> Shows the search trends over a Week</span>
              </TabsContent>
              <TabsContent value="monthlyTrends">
                <div className="font-bold">Monthly Trends</div>
                <span> Shows the search trends over a Month</span>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              User Engagement Insights
            </CardTitle>
            <SearchCheck />
          </CardHeader>
          <CardContent>
            <Overview />

            {/* #Todo: what to do
            Graphical representations of user interaction trends, such as peak usage times, most active user segments, and geographical distribution of users.
            Analysis of feedback trends to understand overall user satisfaction and areas for enhancement.
            */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Insights</CardTitle>
            <SearchCheck />
          </CardHeader>
          <CardContent>
            AI Accuracy?
          {/* Reports on the accuracy and performance of the AI in answering queries, including success rates and areas where human intervention is frequently needed.
Suggestions for new FAQs based on unanswered queries or topics with high user interest but low content availability. */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Content Gap Analysis
            </CardTitle>
            <SearchCheck />
          </CardHeader>
          <CardContent>
          {/* Highlight topics with high search volumes but low satisfaction or no available FAQs, indicating areas for content development.
            Keyword analysis to suggest new tags or revisions for existing FAQs to improve their discoverability and relevance. */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TrendsAndMarketing;
