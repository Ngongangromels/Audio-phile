import * as React from "react";
import { UploadButton } from "@/utils/uploadthing";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // URL de l'image
  const [price, setPrice] = useState(""); 

  async function onCreate() {
    try {
      toast.loading("Creating a new product...");
      const res = await fetch("/api/product", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          image,
          price,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create product");
      }

      await res.json();
      toast.success("New product created!");
    } catch {
      toast.error("Failed to create product");
    }
  }

  return (
    <div className="flex items-center justify-center mx-auto py-36">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="text-center">Create Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Title project"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Price</Label>
                <Input
                  id="price"
                  placeholder="Price product"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Add a description."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    const url = res?.[0]?.url;
                    setImage(url);
                    toast.success("Image uploaded!");
                    console.log("Image URL:", url);
                  }}
                  onUploadError={(error: Error) => {
                    toast.error(`Upload error: ${error.message}`);
                  }}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={onCreate} className="w-full" variant="outline">
            Add product
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};