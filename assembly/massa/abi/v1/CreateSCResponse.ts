// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddress } from "../../model/v1/NativeAddress";

export class CreateSCResponse {
  static encode(message: CreateSCResponse, writer: Writer): void {
    const scAddress = message.scAddress;
    if (scAddress !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddress.encode(scAddress, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CreateSCResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CreateSCResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scAddress = NativeAddress.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  scAddress: NativeAddress | null;

  constructor(scAddress: NativeAddress | null = null) {
    this.scAddress = scAddress;
  }
}

export function encodeCreateSCResponse(message: CreateSCResponse): Uint8Array {
  return Protobuf.encode(message, CreateSCResponse.encode);
}

export function decodeCreateSCResponse(buffer: Uint8Array): CreateSCResponse {
  return Protobuf.decode<CreateSCResponse>(buffer, CreateSCResponse.decode);
}
