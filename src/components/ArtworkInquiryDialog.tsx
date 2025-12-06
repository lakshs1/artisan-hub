import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Artwork } from "@/data/artworks";

interface ArtworkInquiryDialogProps {
  artwork: Artwork;
  type: "purchase" | "commission";
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ArtworkInquiryDialog = ({
  artwork,
  type,
  open,
  onOpenChange,
}: ArtworkInquiryDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - will be replaced with actual Supabase integration
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your interest!",
      description: "Our manager will contact you soon regarding this artwork.",
      duration: 5000,
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            {type === "purchase" ? "Purchase Inquiry" : "Commission Request"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {type === "purchase"
              ? `Express your interest in "${artwork.title}"`
              : `Request a custom commission inspired by "${artwork.title}"`}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Your Name
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="your@email.com"
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Your Message to the Artist
            </Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder={
                type === "purchase"
                  ? "Share why this piece resonates with you..."
                  : "Describe your vision for the commission..."
              }
              className="bg-background border-border min-h-[120px]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
