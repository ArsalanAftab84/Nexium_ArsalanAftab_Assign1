import { NextResponse } from 'next/dist/server/web/spec-extension/response'
import React from 'react'
import { json } from 'stream/consumers'

export const GET = () => {
  return NextResponse.json(
    {
        message: 'Hello from the API route',
        status: 'success',
    }
    )
}
