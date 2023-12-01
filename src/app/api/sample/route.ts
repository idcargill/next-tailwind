import { NextRequest, NextResponse } from 'next/server';

// HTTP methods are CAPITALIZED
export async function GET(req: NextRequest, context) {
  // Extract params without hook as URL OBJ
  const { searchParams } = new URL(req.url);

  const name = searchParams.get('name');

  const sampleData = {
    test: name ? 'Good job' : 'Enter a search param for [name]',
    params: searchParams.get('name'),
  };

  return NextResponse.json(sampleData);
}
