// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeSig } from "..\\..\\model\\v1\\NativeSig";
import { NativePubKey } from "..\\..\\model\\v1\\NativePubKey";

export class VerifyNativeSigRequest {
  static encode(message: VerifyNativeSigRequest, writer: Writer): void {
    const sig = message.sig;
    if (sig !== null) {
      writer.uint32(10);
      writer.fork();
      NativeSig.encode(sig, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.message);

    const pubKey = message.pubKey;
    if (pubKey !== null) {
      writer.uint32(26);
      writer.fork();
      NativePubKey.encode(pubKey, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): VerifyNativeSigRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new VerifyNativeSigRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sig = NativeSig.decode(reader, reader.uint32());
          break;

        case 2:
          message.message = reader.bytes();
          break;

        case 3:
          message.pubKey = NativePubKey.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sig: NativeSig | null;
  message: Uint8Array;
  pubKey: NativePubKey | null;

  constructor(
    sig: NativeSig | null = null,
    message: Uint8Array = new Uint8Array(0),
    pubKey: NativePubKey | null = null
  ) {
    this.sig = sig;
    this.message = message;
    this.pubKey = pubKey;
  }
}

export function encodeVerifyNativeSigRequest(
  message: VerifyNativeSigRequest
): Uint8Array {
  return Protobuf.encode(message, VerifyNativeSigRequest.encode);
}

export function decodeVerifyNativeSigRequest(
  buffer: Uint8Array
): VerifyNativeSigRequest {
  return Protobuf.decode<VerifyNativeSigRequest>(
    buffer,
    VerifyNativeSigRequest.decode
  );
}
