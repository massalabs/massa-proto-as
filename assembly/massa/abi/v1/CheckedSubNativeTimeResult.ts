// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeTime } from "../../model/v1/NativeTime";

export class CheckedSubNativeTimeResult {
  static encode(message: CheckedSubNativeTimeResult, writer: Writer): void {
    const difference = message.difference;
    if (difference !== null) {
      writer.uint32(10);
      writer.fork();
      NativeTime.encode(difference, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CheckedSubNativeTimeResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckedSubNativeTimeResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.difference = NativeTime.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  difference: NativeTime | null;

  constructor(difference: NativeTime | null = null) {
    this.difference = difference;
  }
}

export function encodeCheckedSubNativeTimeResult(
  message: CheckedSubNativeTimeResult
): Uint8Array {
  return Protobuf.encode(message, CheckedSubNativeTimeResult.encode);
}

export function decodeCheckedSubNativeTimeResult(
  buffer: Uint8Array
): CheckedSubNativeTimeResult {
  return Protobuf.decode<CheckedSubNativeTimeResult>(
    buffer,
    CheckedSubNativeTimeResult.decode
  );
}
