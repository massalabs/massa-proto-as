// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeTime } from "..\\..\\model\\v1\\NativeTime";

export class CheckedScalarDivRemNativeTimeResult {
  static encode(
    message: CheckedScalarDivRemNativeTimeResult,
    writer: Writer
  ): void {
    const quotient = message.quotient;
    if (quotient !== null) {
      writer.uint32(10);
      writer.fork();
      NativeTime.encode(quotient, writer);
      writer.ldelim();
    }

    const remainder = message.remainder;
    if (remainder !== null) {
      writer.uint32(18);
      writer.fork();
      NativeTime.encode(remainder, writer);
      writer.ldelim();
    }
  }

  static decode(
    reader: Reader,
    length: i32
  ): CheckedScalarDivRemNativeTimeResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckedScalarDivRemNativeTimeResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quotient = NativeTime.decode(reader, reader.uint32());
          break;

        case 2:
          message.remainder = NativeTime.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  quotient: NativeTime | null;
  remainder: NativeTime | null;

  constructor(
    quotient: NativeTime | null = null,
    remainder: NativeTime | null = null
  ) {
    this.quotient = quotient;
    this.remainder = remainder;
  }
}

export function encodeCheckedScalarDivRemNativeTimeResult(
  message: CheckedScalarDivRemNativeTimeResult
): Uint8Array {
  return Protobuf.encode(message, CheckedScalarDivRemNativeTimeResult.encode);
}

export function decodeCheckedScalarDivRemNativeTimeResult(
  buffer: Uint8Array
): CheckedScalarDivRemNativeTimeResult {
  return Protobuf.decode<CheckedScalarDivRemNativeTimeResult>(
    buffer,
    CheckedScalarDivRemNativeTimeResult.decode
  );
}
