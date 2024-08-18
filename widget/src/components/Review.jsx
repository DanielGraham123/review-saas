import React, { useState } from "react";
import { Button } from "./ui/button";
import MessageIcon from "./MessageIcon";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { StarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import tailwindStyles from "../index.css?inline";

const Review = () => {
  const [rating, setRating] = useState(3);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      rating,
    };
    setSubmitted(true);
    console.log(data);
  };

  return (
    <>
      <style>{tailwindStyles}</style>
      <div className="g-review fixed bottom-4 right-4 z-50 ">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="shadow-lg hover:scale-105 rounded-full py-5 px-5">
              <MessageIcon className={"mr-1 w-4"} />
              <span>Review</span>
            </Button>
          </PopoverTrigger>

          {/* form */}
          <PopoverContent className="g-review p-4 rounded-md border-2 border-primary/45 bg-card max-w-md shadow-lg w-full">
            <style>{tailwindStyles}</style>

            {submitted ? (
              <div className="flex flex-col items-center space-y-2">
                <h1 className="font-bold py-2 text-lg">
                  Thank you for your feedback!
                </h1>
                <p className="text-center">
                  We appreciate your feedback. It helps us improve our service.
                </p>
              </div>
            ) : (
              <div className="">
                <h1 className="font-bold py-2 text-lg">
                  Tell us about your experience.
                </h1>

                <form className="space-y-2 py-3" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-start space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="flex flex-col items-start space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="col-span-2 flex flex-col items-start space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="What did you like or dislike about our service?"
                        rows="3"
                        className="resize-none w-full"
                      />
                    </div>

                    {/* rating */}
                    <div className="flex justify-between items-end col-span-2">
                      <div className="flex flex-col items-start space-y-2">
                        <Label htmlFor="rating">Rating</Label>
                        <div className="flex space-x-2">
                          {[...Array(5)].map((_, index) => (
                            <StarIcon
                              key={index}
                              className={`h-6 w-6 cursor-pointer ${
                                rating > index
                                  ? "fill-primary"
                                  : "fill-muted stroke-muted-foreground"
                              }`}
                              onClick={() => handleRating(index)}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="float-end">
                        <Button
                          type="submit"
                          className="flex flex-col items-center  mb-0"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Review;
