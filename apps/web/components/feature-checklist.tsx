"use client";

import useLocalStorageState from "use-local-storage-state";
import { Checkbox } from "@repo/ui/primitives/checkbox";
import { cn } from "@repo/ui/lib/utils";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
}

const FEATURE_ITEMS: ChecklistItem[] = [
  {
    id: "list-feedback",
    title: "Listing feedback cards",
    description:
      "As an unauthenticated user, I can view a list of feedback cards. The list should be sorted by the number of upvotes. The styling is up to you.",
  },
  {
    id: "submit-feedback",
    title: "Submitting a feedback card",
    description:
      "As an unauthenticated user, I can submit feedback by entering a message and clicking the submit button. The new card is stored in the database and immediately displayed in the list.",
  },
  {
    id: "upvoting-feedback",
    title: "Upvoting a feedback card",
    description:
      "As an unauthenticated user, I can upvote feedback by clicking the upvote button on a feedback card. There is no limit on the number of upvotes a user can give.",
  },
];

export function FeatureChecklist() {
  const [checkedItems, setCheckedItems] = useLocalStorageState<
    Record<string, boolean>
  >("feature-checklist-state", {
    defaultValue: {},
  });

  const toggleItem = (itemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <ul className="space-y-2 list-none">
      {FEATURE_ITEMS.map((item) => {
        const isChecked = checkedItems[item.id] || false;

        return (
          <li
            key={item.id}
            className="flex bg-muted/50 border rounded-lg p-4 items-start gap-4"
          >
            <div className="flex items-center justify-center p-1">
              <Checkbox
                checked={isChecked}
                onCheckedChange={() => toggleItem(item.id)}
                className="bg-background"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div
                className={cn(
                  "text-base font-semibold text-foreground",
                  isChecked && "line-through",
                )}
              >
                {item.title}
              </div>
              <p
                className={cn(
                  "text-sm text-muted-foreground",
                  isChecked && "line-through",
                )}
              >
                {item.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
