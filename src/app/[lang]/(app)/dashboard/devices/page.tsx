"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/devices.scss";

type Device = {
  id: number;
  name: string;
  type: "mobile" | "laptop" | "desktop";
  os: string;
  lastActive: string;
  status: "active" | "blocked";
};

export default function DevicesPage() {
  const { t } = useTranslation();

  const [devices, setDevices] = useState<Device[]>([
    {
      id: 1,
      name: "iPhone 15",
      type: "mobile",
      os: "iOS",
      lastActive: "2 min ago",
      status: "active",
    },
    {
      id: 2,
      name: "MacBook Pro",
      type: "laptop",
      os: "macOS",
      lastActive: "1 hour ago",
      status: "active",
    },
    {
      id: 3,
      name: "Office PC",
      type: "desktop",
      os: "Windows",
      lastActive: "Yesterday",
      status: "blocked",
    },
  ]);

  const maxDevices = 5;

  const renameDevice = (id: number) => {
    const newName = prompt(t("devicesPage.prompts.rename"));
    if (!newName) return;

    setDevices((prev) =>
      prev.map((d) => (d.id === id ? { ...d, name: newName } : d)),
    );
  };

  const toggleBlock = (id: number) => {
    setDevices((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, status: d.status === "active" ? "blocked" : "active" }
          : d,
      ),
    );
  };

  const removeDevice = (id: number) => {
    setDevices((prev) => prev.filter((d) => d.id !== id));
  };

  const addDevice = () => {
    if (devices.length >= maxDevices) return;

    setDevices((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: t("devicesPage.defaults.newDevice"),
        type: "mobile",
        os: t("devicesPage.defaults.unknownOs"),
        lastActive: t("devicesPage.defaults.now"),
        status: "active",
      },
    ]);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "mobile":
        return "📱";
      case "laptop":
        return "💻";
      case "desktop":
        return "🖥️";
      default:
        return "📦";
    }
  };

  return (
    <div className="devices-page">
      {/* HEADER */}
      <div className="devices-header">
        <div>
          <h2>{t("devicesPage.title")}</h2>
          <p>
            {devices.length} / {maxDevices} {t("devicesPage.header.used")}
          </p>
        </div>

        <button onClick={addDevice} disabled={devices.length >= maxDevices}>
          {t("devicesPage.actions.add")}
        </button>
      </div>

      {/* LIST */}
      <div className="devices-list">
        {devices.map((device) => (
          <div key={device.id} className={`device-card ${device.status}`}>
            {/* LEFT */}
            <div className="device-info">
              <div className="icon">{getIcon(device.type)}</div>

              <div>
                <h3>{device.name}</h3>
                <p>
                  {device.os} • {t("devicesPage.labels.lastActive")}{" "}
                  {device.lastActive}
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="device-actions">
              <button onClick={() => renameDevice(device.id)}>
                {t("devicesPage.actions.rename")}
              </button>

              <button onClick={() => toggleBlock(device.id)}>
                {device.status === "active"
                  ? t("devicesPage.actions.block")
                  : t("devicesPage.actions.unblock")}
              </button>

              <button>{t("devicesPage.actions.locate")}</button>

              <button
                className="danger"
                onClick={() => removeDevice(device.id)}
              >
                {t("devicesPage.actions.remove")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
