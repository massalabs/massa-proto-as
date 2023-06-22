// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeTime } from "..\\..\\model\\v1\\NativeTime";

export class CheckedMulNativeTimeRequest {
  static encode(message: CheckedMulNativeTimeRequest, writer: Writer): void {
    const time = message.time;
    if (time !== null) {
      writer.uint32(10);
      writer.fork();
      NativeTime.encode(time, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.int64(message.coefficient);
  }

  static decode(reader: Reader, length: i32): CheckedMulNativeTimeRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckedMulNativeTimeRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = NativeTime.decode(reader, reader.uint32());
          break;

        case 2:
          message.coefficient = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  time: NativeTime | null;
  coefficient: i64;

  constructor(time: NativeTime | null = null, coefficient: i64 = 0) {
    this.time = time;
    this.coefficient = coefficient;
  }
}

export function encodeCheckedMulNativeTimeRequest(
  message: CheckedMulNativeTimeRequest
): Uint8Array {
  return Protobuf.encode(message, CheckedMulNativeTimeRequest.encode);
}

export function decodeCheckedMulNativeTimeRequest(
  buffer: Uint8Array
): CheckedMulNativeTimeRequest {
  return Protobuf.decode<CheckedMulNativeTimeRequest>(
    buffer,
    CheckedMulNativeTimeRequest.decode
  );
}
