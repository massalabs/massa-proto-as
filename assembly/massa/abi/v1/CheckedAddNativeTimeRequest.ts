// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeTime } from "../../model/v1/NativeTime";

export class CheckedAddNativeTimeRequest {
  static encode(message: CheckedAddNativeTimeRequest, writer: Writer): void {
    const left = message.left;
    if (left !== null) {
      writer.uint32(10);
      writer.fork();
      NativeTime.encode(left, writer);
      writer.ldelim();
    }

    const right = message.right;
    if (right !== null) {
      writer.uint32(18);
      writer.fork();
      NativeTime.encode(right, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CheckedAddNativeTimeRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckedAddNativeTimeRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.left = NativeTime.decode(reader, reader.uint32());
          break;

        case 2:
          message.right = NativeTime.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  left: NativeTime | null;
  right: NativeTime | null;

  constructor(left: NativeTime | null = null, right: NativeTime | null = null) {
    this.left = left;
    this.right = right;
  }
}

export function encodeCheckedAddNativeTimeRequest(
  message: CheckedAddNativeTimeRequest
): Uint8Array {
  return Protobuf.encode(message, CheckedAddNativeTimeRequest.encode);
}

export function decodeCheckedAddNativeTimeRequest(
  buffer: Uint8Array
): CheckedAddNativeTimeRequest {
  return Protobuf.decode<CheckedAddNativeTimeRequest>(
    buffer,
    CheckedAddNativeTimeRequest.decode
  );
}
