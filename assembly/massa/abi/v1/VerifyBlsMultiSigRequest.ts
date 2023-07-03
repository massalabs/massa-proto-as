// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class VerifyBlsMultiSigRequest {
  static encode(message: VerifyBlsMultiSigRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.sig);

    writer.uint32(18);
    writer.bytes(message.message);

    const pubKeys = message.pubKeys;
    if (pubKeys.length !== 0) {
      for (let i: i32 = 0; i < pubKeys.length; ++i) {
        writer.uint32(26);
        writer.bytes(pubKeys[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): VerifyBlsMultiSigRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new VerifyBlsMultiSigRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sig = reader.bytes();
          break;

        case 2:
          message.message = reader.bytes();
          break;

        case 3:
          message.pubKeys.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sig: Uint8Array;
  message: Uint8Array;
  pubKeys: Array<Uint8Array>;

  constructor(
    sig: Uint8Array = new Uint8Array(0),
    message: Uint8Array = new Uint8Array(0),
    pubKeys: Array<Uint8Array> = []
  ) {
    this.sig = sig;
    this.message = message;
    this.pubKeys = pubKeys;
  }
}

export function encodeVerifyBlsMultiSigRequest(
  message: VerifyBlsMultiSigRequest
): Uint8Array {
  return Protobuf.encode(message, VerifyBlsMultiSigRequest.encode);
}

export function decodeVerifyBlsMultiSigRequest(
  buffer: Uint8Array
): VerifyBlsMultiSigRequest {
  return Protobuf.decode<VerifyBlsMultiSigRequest>(
    buffer,
    VerifyBlsMultiSigRequest.decode
  );
}
