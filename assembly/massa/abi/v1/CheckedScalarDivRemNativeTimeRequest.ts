// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeTime } from "../../model/v1/NativeTime";

export class CheckedScalarDivRemNativeTimeRequest {
  static encode(
    message: CheckedScalarDivRemNativeTimeRequest,
    writer: Writer
  ): void {
    const dividend = message.dividend;
    if (dividend !== null) {
      writer.uint32(10);
      writer.fork();
      NativeTime.encode(dividend, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.uint64(message.divisor);
  }

  static decode(
    reader: Reader,
    length: i32
  ): CheckedScalarDivRemNativeTimeRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckedScalarDivRemNativeTimeRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dividend = NativeTime.decode(reader, reader.uint32());
          break;

        case 2:
          message.divisor = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  dividend: NativeTime | null;
  divisor: u64;

  constructor(dividend: NativeTime | null = null, divisor: u64 = 0) {
    this.dividend = dividend;
    this.divisor = divisor;
  }
}

export function encodeCheckedScalarDivRemNativeTimeRequest(
  message: CheckedScalarDivRemNativeTimeRequest
): Uint8Array {
  return Protobuf.encode(message, CheckedScalarDivRemNativeTimeRequest.encode);
}

export function decodeCheckedScalarDivRemNativeTimeRequest(
  buffer: Uint8Array
): CheckedScalarDivRemNativeTimeRequest {
  return Protobuf.decode<CheckedScalarDivRemNativeTimeRequest>(
    buffer,
    CheckedScalarDivRemNativeTimeRequest.decode
  );
}
