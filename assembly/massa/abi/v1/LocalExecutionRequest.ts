// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class LocalExecutionRequest {
  static encode(message: LocalExecutionRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.bytecode);

    writer.uint32(18);
    writer.string(message.targetFunctionName);

    writer.uint32(26);
    writer.bytes(message.functionArg);
  }

  static decode(reader: Reader, length: i32): LocalExecutionRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new LocalExecutionRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bytecode = reader.bytes();
          break;

        case 2:
          message.targetFunctionName = reader.string();
          break;

        case 3:
          message.functionArg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  bytecode: Uint8Array;
  targetFunctionName: string;
  functionArg: Uint8Array;

  constructor(
    bytecode: Uint8Array = new Uint8Array(0),
    targetFunctionName: string = "",
    functionArg: Uint8Array = new Uint8Array(0)
  ) {
    this.bytecode = bytecode;
    this.targetFunctionName = targetFunctionName;
    this.functionArg = functionArg;
  }
}

export function encodeLocalExecutionRequest(
  message: LocalExecutionRequest
): Uint8Array {
  return Protobuf.encode(message, LocalExecutionRequest.encode);
}

export function decodeLocalExecutionRequest(
  buffer: Uint8Array
): LocalExecutionRequest {
  return Protobuf.decode<LocalExecutionRequest>(
    buffer,
    LocalExecutionRequest.decode
  );
}