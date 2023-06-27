// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeSig } from "..\\..\\model\\v1\\NativeSig";

export class CheckNativeSigRequest {
  static encode(message: CheckNativeSigRequest, writer: Writer): void {
    const toCheck = message.toCheck;
    if (toCheck !== null) {
      writer.uint32(10);
      writer.fork();
      NativeSig.encode(toCheck, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CheckNativeSigRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckNativeSigRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toCheck = NativeSig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  toCheck: NativeSig | null;

  constructor(toCheck: NativeSig | null = null) {
    this.toCheck = toCheck;
  }
}

export function encodeCheckNativeSigRequest(
  message: CheckNativeSigRequest
): Uint8Array {
  return Protobuf.encode(message, CheckNativeSigRequest.encode);
}

export function decodeCheckNativeSigRequest(
  buffer: Uint8Array
): CheckNativeSigRequest {
  return Protobuf.decode<CheckNativeSigRequest>(
    buffer,
    CheckNativeSigRequest.decode
  );
}
