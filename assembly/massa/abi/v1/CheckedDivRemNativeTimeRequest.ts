// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeTime } from "../../model/v1/NativeTime";

export class CheckedDivRemNativeTimeRequest {
  static encode(message: CheckedDivRemNativeTimeRequest, writer: Writer): void {
    const dividend = message.dividend;
    if (dividend !== null) {
      writer.uint32(10);
      writer.fork();
      NativeTime.encode(dividend, writer);
      writer.ldelim();
    }

    const divisor = message.divisor;
    if (divisor !== null) {
      writer.uint32(18);
      writer.fork();
      NativeTime.encode(divisor, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CheckedDivRemNativeTimeRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckedDivRemNativeTimeRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dividend = NativeTime.decode(reader, reader.uint32());
          break;

        case 2:
          message.divisor = NativeTime.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  dividend: NativeTime | null;
  divisor: NativeTime | null;

  constructor(
    dividend: NativeTime | null = null,
    divisor: NativeTime | null = null
  ) {
    this.dividend = dividend;
    this.divisor = divisor;
  }
}

export function encodeCheckedDivRemNativeTimeRequest(
  message: CheckedDivRemNativeTimeRequest
): Uint8Array {
  return Protobuf.encode(message, CheckedDivRemNativeTimeRequest.encode);
}

export function decodeCheckedDivRemNativeTimeRequest(
  buffer: Uint8Array
): CheckedDivRemNativeTimeRequest {
  return Protobuf.decode<CheckedDivRemNativeTimeRequest>(
    buffer,
    CheckedDivRemNativeTimeRequest.decode
  );
}
