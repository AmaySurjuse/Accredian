import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { LeadSchema } from "@/lib/validations";
import Lead from "@/models/lead";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Use safeParse with updated Zod LeadSchema
    const validationResult = LeadSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validationResult.error.format() },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect(); 

    // Insert into MongoDB using the validated data
    const newLead = await Lead.create(validationResult.data);

    return NextResponse.json(
      { message: "Lead captured successfully", leadId: newLead._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Backend Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
