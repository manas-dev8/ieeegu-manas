"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Clock, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { eventData } from "@/data/events"; 
import { EventDetails } from "@/types/payment";

export function RegistrationSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams?.get("orderId") || "";
  const eventId = searchParams?.get("eventId") || "";
  const [event, setEvent] = useState<EventDetails | null>(null);
  
  useEffect(() => {
    if (eventId) {
      const foundEvent = eventData.find(e => e.id === eventId);
      if (foundEvent) {
        setEvent(foundEvent);
      }
    }
  }, [eventId]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Registration Successful!</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Your payment has been processed and your spot is reserved for the event.
        </p>
      </div>

      <Card className="mb-8 border-slate-100 shadow-md">
        <CardHeader className="bg-slate-50 border-b border-slate-100">
          <CardTitle className="text-xl">Registration Details</CardTitle>
          <CardDescription>Reference information for your records</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-dashed border-slate-200">
            <span className="text-slate-600 font-medium">Order ID</span>
            <span className="text-slate-800 font-mono bg-slate-50 px-2 py-1 rounded text-sm">{orderId}</span>
          </div>
          
          {event && (
            <>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Event</span>
                <span className="text-slate-800 font-medium">{event.name}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Date</span>
                <span className="text-slate-800">{event.date}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Venue</span>
                <span className="text-slate-800">{event.venue}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Organizer</span>
                <span className="text-slate-800">{event.organizer}</span>
              </div>
            </>
          )}
          
          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="bg-blue-50 rounded-md p-4 flex gap-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-blue-800 font-medium mb-1">What's Next?</p>
                <p className="text-blue-700 text-sm">
                  Check your email for confirmation and event instructions. We're looking forward to seeing you!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="outline"
          size="lg"
          className="border-slate-200 text-slate-700 hover:bg-slate-50"
        >
          <Download className="mr-2 h-4 w-4" />
          Save E-Ticket
        </Button>
        
        <Button 
          variant="outline"
          size="lg"
          className="border-slate-200 text-slate-700 hover:bg-slate-50"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share Event
        </Button>
      </div>

      <div className="text-center mt-10">
        <Link href="/youngminds" className="text-blue-600 hover:underline">
          Return to Event Page
        </Link>
      </div>
    </div>
  );
}

