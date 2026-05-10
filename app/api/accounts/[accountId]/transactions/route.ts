import { NextRequest, NextResponse } from 'next/server';
import { tellerGet } from '@/lib/tellerClient';
import axios from 'axios';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ accountId: string }> }
) {
  try {
    const { accountId } = await params;
    const today = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const startDate = lastMonth.toISOString().split('T')[0];
    const endDate = today.toISOString().split('T')[0];

    const accessToken = req.headers.get('x-access-token');
    if (accessToken === null) {
      return NextResponse.json(
        { error: 'Access token is required' },
        { status: 400 }
      );
    }
    const response = await tellerGet(
      `/accounts/${accountId}/transactions?start_date=${startDate}&end_date=${endDate}`,
      accessToken
    );
    return NextResponse.json(response);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Teller error response:', error.response?.data);
    }
    return NextResponse.json(
      { error: `Failed to fetch accounts: ${error}` },
      { status: 500 }
    );
  }
}
